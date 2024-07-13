import type { FC } from "react";
import classes from "./backdrop.module.scss";

interface BackdropProps {
	src: string;
}

export const BackdropProps: FC<BackdropProps> = ({ src }) => {
	return (
		<div
			className={classes.backdrop}
			style={{
				backgroundImage: `url(${src})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		/>
	);
};
