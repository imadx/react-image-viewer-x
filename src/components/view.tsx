import clsx from "clsx";
import type { FC } from "react";

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
		<div
			className={clsx(
				"flex justify-center content-center bg-gray-700 w-full h-full z-5",
				"overflow-auto no-scrollbar",
			)}
		>
			<img
				alt={alt ?? "Image Preview"}
				src={src}
				className={"transition-all duration-150 ease-in-out"}
				style={{
					transform: `scale(${state.scale})`,
				}}
			/>
		</div>
	);
};
