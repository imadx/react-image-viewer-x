import clsx from "clsx";
import type { FC } from "react";

interface BackdropProps {
	src: string;
}

export const BackdropProps: FC<BackdropProps> = ({ src }) => {
	return (
		<div
			className={clsx(
				"absolute inset-0 z-0",
				"bg-gray-700 bg-opacity-50",
				"blur-xl",
				"scale-125",
			)}
			style={{
				backgroundImage: `url(${src})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		/>
	);
};
