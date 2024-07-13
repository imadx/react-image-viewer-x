import clsx from "clsx";
import type { FC } from "react";
import type { Configuration } from "../types";
import { ControlButton } from "./control-button.tsx";
import { ZoomInIcon } from "./icons/zoom-in.tsx";
import { ZoomOutIcon } from "./icons/zoom-out.tsx";

interface ControlsProps {
	onZoomIn?: () => void;
	onZoomOut?: () => void;
	configuration: Configuration["controllers"];
}

export const Controls: FC<ControlsProps> = ({
	onZoomIn,
	onZoomOut,
	configuration,
}) => {
	const zoomIconNode = configuration.zoomInIcon ?? <ZoomInIcon />;
	const zoomOutIconNode = configuration.zoomOutIcon ?? <ZoomOutIcon />;

	return (
		<div
			className={clsx(
				"flex flex-col absolute z-10 p-2 rounded-xl border border-gray-600/30 border-gray-200 fill-white",
				"bottom-0 right-0 mr-4 mb-4",
				"backdrop-blur-md backdrop-filter",
			)}
		>
			{configuration.hasZoomIn && (
				<ControlButton onClick={onZoomIn}>{zoomIconNode}</ControlButton>
			)}
			{configuration.hasZoomOut && (
				<ControlButton onClick={onZoomOut}>{zoomOutIconNode}</ControlButton>
			)}
		</div>
	);
};
