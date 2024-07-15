import { type FC, useState } from "react";
import type { Configuration } from "../types";
import { BackdropProps } from "./backdrop.tsx";
import { Controls } from "./controls.tsx";
import { StyledImageViewerContainer } from "./image-viewer.styles.ts";
import { View } from "./view.tsx";

interface ViewerProps {
	src: string;
	alt: string;
	configuration?: Partial<Configuration>;
}

const defaultConfiguration: Configuration = {
	viewer: {
		maxScale: 3,
		minScale: 0.5,
		scaleStep: 0.5,
	},
	controllers: {
		hasZoomIn: true,
		hasZoomOut: true,
	},
	options: {
		hasNoBackdrop: true,
	},
};

export const ImageViewer: FC<ViewerProps> = ({
	src,
	configuration: userConfiguration,
}) => {
	const configuration = getMergedConfiguration(
		defaultConfiguration,
		userConfiguration,
	);
	const [scale, setScale] = useState(1);

	const handleZoomIn = () => {
		if (scale >= configuration.viewer.maxScale) {
			return;
		}

		setScale((prevScale) => prevScale + configuration.viewer.scaleStep);
	};

	const handleZoomOut = () => {
		if (scale <= configuration.viewer.minScale) {
			return;
		}

		setScale((prevScale) => prevScale - configuration.viewer.scaleStep);
	};

	const state = { scale };

	return (
		<StyledImageViewerContainer>
			<BackdropProps src={src} />
			<Controls
				onZoomIn={handleZoomIn}
				onZoomOut={handleZoomOut}
				configuration={configuration.controllers}
			/>
			<View src={src} state={state} />
		</StyledImageViewerContainer>
	);
};

const getMergedConfiguration = (
	defaultConfiguration: Configuration,
	userConfiguration: Partial<Configuration> | undefined,
): Configuration => {
	return {
		viewer: {
			...defaultConfiguration.viewer,
			...userConfiguration?.viewer,
		},
		controllers: {
			...defaultConfiguration.controllers,
			...userConfiguration?.controllers,
		},
		options: {
			...defaultConfiguration.options,
			...userConfiguration?.options,
		},
	};
};
