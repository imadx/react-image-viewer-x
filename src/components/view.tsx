import anime from "animejs";
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
	const imageWrapperRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);

	const containerDimensionsRef = useRef<Dimensions>({
		width: 800,
		height: 450,
	});
	const imageDimensionsRef = useRef<Dimensions>({ width: 800, height: 450 });

	const scrollPositionRef = useRef({ x: 0, y: 0 });
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
		const handleScroll = () => {
			if (!containerRef.current) return;

			scrollPositionRef.current = {
				x: containerRef.current.scrollLeft,
				y: containerRef.current.scrollTop,
			};
		};

		if (!containerRef.current) return;
		containerRef.current.addEventListener("scroll", handleScroll);

		return () => {
			if (!containerRef.current) return;
			containerRef.current.removeEventListener("scroll", handleScroll);
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
			});
	}, [src]);

	useEffect(() => {
		// update the scroll position when scale changes, so that the center always remains in the same position
		if (!containerRef.current) return;

		const scale = state.scale;
		const imageX = imageDimensions.width * scale;
		const imageY = imageDimensions.height * scale;

		const containerX = containerDimensionsRef.current.width;
		const containerY = containerDimensionsRef.current.height;

		const scrollX = Math.max(0, (imageX - containerX) / 2);
		const scrollY = Math.max(0, (imageY - containerY) / 2);

		anime({
			targets: containerRef.current,
			scrollLeft: scrollX,
			scrollTop: scrollY,
			duration: 300,
			easing: "cubicBezier(.3, 0, 0, 1)",
		});

		anime({
			targets: imageWrapperRef.current,
			padding: `${paddingY}px ${paddingX}px`,
			duration: 300,
			easing: "cubicBezier(.3, 0, 0, 1)",
		});

		anime({
			targets: imageRef.current,
			width: `${state.scale * imageDimensions.width}px`,
			height: `${state.scale * imageDimensions.height}px`,
			duration: 300,
			easing: "cubicBezier(.3, 0, 0, 1)",
		});
	}, [state.scale, imageDimensions]);

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
			<div ref={imageWrapperRef} className={classes.imageWrapper}>
				<img
					ref={imageRef}
					alt={alt ?? "Image Preview"}
					src={src}
					className={classes.image}
					style={
						{
							// width: `${state.scale * imageDimensions.width}px`,
							// height: `${state.scale * imageDimensions.height}px`,
						}
					}
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
