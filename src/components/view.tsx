import type { FC } from "react";
import classes from "./view.module.scss";

interface State {
	scale: number;
}

interface ViewProps {
	src: string;
	alt: string;
	state: State;
}

export const View: FC<ViewProps> = ({ src, alt, state }) => {
	return (
		<div className={classes.container}>
			<img
				alt={alt ?? "Image Preview"}
				src={src}
				className={classes.image}
				style={{
					width: `${state.scale * 100}%`,
					height: `${state.scale * 100}%`,
				}}
			/>
		</div>
	);
};
