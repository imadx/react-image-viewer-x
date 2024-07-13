import { type FC, useEffect, useRef, useState } from "react";
import classes from "./view.module.scss";

interface State {
	scale: number;
}

interface ViewProps {
	src: string;
	alt: string;
	state: State;
}

interface Dimensions {
	width: number;
	height: number;
}

export const View: FC<ViewProps> = ({ src, alt, state }) => {
	// detect original image aspect ratio
	const containerRef = useRef<HTMLDivElement>(null);
	const containerDimensionsRef = useRef<Dimensions>({
		width: 800,
		height: 450,
	});
	const imageDimensionsRef = useRef<Dimensions>({ width: 800, height: 450 });

	const aspectRatioRef = useRef(16 / 9);
	const [imageDimensions, setImageDimensions] = useState<Dimensions>({
		width: 800,
		height: 450,
	});

	useEffect(() => {
		if (!containerRef.current) return;

		containerDimensionsRef.current = {
			width: containerRef.current.offsetWidth,
			height: containerRef.current.offsetHeight,
		};
	}, []);

	useEffect(() => {
		getMeta(src)
			.then(({ width, height }) => {
				imageDimensionsRef.current = { width, height };
			})
			.then(() => {
				aspectRatioRef.current =
					imageDimensionsRef.current.width / imageDimensionsRef.current.height;

				const dimensions = getImageDimensionsToFit(
					containerDimensionsRef.current,
					imageDimensionsRef.current,
				);
				setImageDimensions(dimensions);
				console.log("=>(view.tsx:57) dimensions", dimensions);
			});
	}, [src]);

	const paddingX = Math.max(
		0,
		(containerDimensionsRef.current.width -
			imageDimensions.width * state.scale) /
			2,
	);

	const paddingY = Math.max(
		0,
		(containerDimensionsRef.current.height -
			imageDimensions.height * state.scale) /
			2,
	);

	return (
		<div ref={containerRef} className={classes.container}>
			<div
				className={classes.imageWrapper}
				style={{
					padding: `${paddingY}px ${paddingX}px`,
				}}
			>
				<img
					alt={alt ?? "Image Preview"}
					src={src}
					className={classes.image}
					style={{
						width: `${state.scale * imageDimensions.width}px`,
						height: `${state.scale * imageDimensions.height}px`,
					}}
				/>
			</div>
		</div>
	);
};

const getMeta = (src: string): Promise<{ width: number; height: number }> => {
	const img = new Image();

	return new Promise((resolve, reject) => {
		img.onload = () => {
			resolve({ width: img.width, height: img.height });
		};
		img.onerror = reject;
		img.src = src;
	});
};

const getImageDimensionsToFit = (
	containerDimensions: Dimensions,
	imageDimensions: Dimensions,
): { width: number; height: number } => {
	const containerAspectRatio =
		containerDimensions.width / containerDimensions.height;
	const imageAspectRatio = imageDimensions.width / imageDimensions.height;

	if (containerAspectRatio > imageAspectRatio) {
		return {
			width: containerDimensions.height * imageAspectRatio,
			height: containerDimensions.height,
		};
	}

	return {
		width: containerDimensions.width,
		height: containerDimensions.width / imageAspectRatio,
	};
};
