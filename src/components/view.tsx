import anime, { type AnimeInstance } from "animejs";
import { type FC, useCallback, useEffect, useRef } from "react";
import classes from "./view.module.scss";

interface State {
	scale: number;
}

interface ViewProps {
	src: string;
	state: State;
}

interface Dimensions {
	width: number;
	height: number;
}

interface Position {
	x: number;
	y: number;
}

export const View: FC<ViewProps> = ({ src, state }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement | null>(null);

	const containerDimensionsRef = useRef<Dimensions>({
		width: 800,
		height: 450,
	});
	const imageOriginalDimensionsRef = useRef<Dimensions>({
		width: 800,
		height: 450,
	});
	const imageDimensionsRef = useRef<Dimensions>({ width: 800, height: 450 });

	const aspectRatioRef = useRef(16 / 9);

	const animeRef = useRef<AnimeInstance | null>(null);
	const rAFRef = useRef<number | null>(null);
	const animationRef = useRef<Position & { scale: number }>({
		x: 0,
		y: 0,
		scale: 1,
	});

	useEffect(() => {
		const image = new Image();
		image.onload = () => {
			imageRef.current = image;
		};

		image.src = src;
	}, [src]);

	useEffect(() => {
		if (!containerRef.current) return;

		containerDimensionsRef.current = {
			width: containerRef.current.offsetWidth,
			height: containerRef.current.offsetHeight,
		};

		if (!canvasRef.current) return;
		canvasRef.current.width = containerDimensionsRef.current.width;
		canvasRef.current.height = containerDimensionsRef.current.height;
	}, []);

	const drawCanvasImageWithOffsets = useCallback(() => {
		if (!imageRef.current) return;

		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		// ctx.clearRect(0, 0, canvas.width, canvas.height);

		const { width, height } = imageDimensionsRef.current;

		if (!animationRef.current) return;
		console.log("=>(view.tsx:83) animationRef", animationRef);

		const scale = animationRef.current.scale;
		const scaledWidth = width * scale;
		const scaledHeight = height * scale;

		const offsetX = animationRef.current.x - scaledWidth / 2;
		const offsetY = animationRef.current.y - scaledHeight / 2;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(
			imageRef.current,
			offsetX,
			offsetY,
			scaledWidth,
			scaledHeight,
		);
	}, []);

	useEffect(() => {
		getMeta(src)
			.then(({ width, height }) => {
				imageOriginalDimensionsRef.current = { width, height };
			})
			.then(() => {
				aspectRatioRef.current =
					imageOriginalDimensionsRef.current.width /
					imageOriginalDimensionsRef.current.height;

				const dimensions = getImageDimensionsToFit(
					containerDimensionsRef.current,
					imageOriginalDimensionsRef.current,
				);
				console.log("=>(view.tsx:55) dimensions", dimensions);
				imageDimensionsRef.current = dimensions;

				if (!canvasRef.current) return;

				animationRef.current = {
					x: canvasRef.current.width / 2,
					y: canvasRef.current.height / 2,
					scale: 1,
				};

				drawCanvasImageWithOffsets();
			});
	}, [src, drawCanvasImageWithOffsets]);

	const animateFrames = useCallback(
		(animation: AnimeInstance) => {
			if (animeRef.current?.progress === 100) {
				return;
			}

			drawCanvasImageWithOffsets();

			rAFRef.current = requestAnimationFrame(() => {
				animateFrames(animation);
			});
		},
		[drawCanvasImageWithOffsets],
	);

	useEffect(() => {
		if (!state) return;

		if (rAFRef.current) {
			cancelAnimationFrame(rAFRef.current);
		}

		if (!animeRef.current?.complete) {
			animeRef.current?.pause();
		}

		animeRef.current = anime({
			targets: animationRef.current,
			scale: state.scale,
			duration: 500,
			easing: "easeOutExpo",
			autoplay: true,
			update: (animation) => {
				animateFrames(animation);
			},
		});
	}, [state, animateFrames]);

	return (
		<div ref={containerRef} className={classes.container}>
			<canvas ref={canvasRef} className={classes.image} />
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
