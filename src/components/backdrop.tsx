import type { FC } from "react";
import { StyledBackdrop } from "./backdrop.styles.ts";

interface BackdropProps {
	src: string;
}

export const BackdropProps: FC<BackdropProps> = ({ src }) => {
	return (
		<StyledBackdrop
			style={{
				backgroundImage: `url(${src})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		/>
	);
};
