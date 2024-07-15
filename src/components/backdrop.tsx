import type { FC } from "react";
import { StyledBackdrop } from "./backdrop.styles.ts";

interface BackdropProps {
	src: string;
}

export const Backdrop: FC<BackdropProps> = ({ src }) => {
	return (
		<StyledBackdrop
			data-rivx-backdrop
			style={{
				backgroundImage: `url(${src})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		/>
	);
};
