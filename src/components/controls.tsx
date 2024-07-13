import type { FC } from "react";
import type { Configuration } from "../types";
import { ControlButton } from "./control-button.tsx";
import classes from "./controls.module.scss";
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
		<div className={classes.controlsContainer}>
			{configuration.hasZoomIn && (
				<ControlButton onClick={onZoomIn}>{zoomIconNode}</ControlButton>
			)}
			{configuration.hasZoomOut && (
				<ControlButton onClick={onZoomOut}>{zoomOutIconNode}</ControlButton>
			)}
		</div>
	);
};
