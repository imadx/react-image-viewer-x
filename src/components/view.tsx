import anime, { type AnimeInstance } from "animejs";
import { type FC, useCallback, useEffect, useRef } from "react";
import { StyledCanvas, StyledDivContainer } from "./view.styles.ts";

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
		const updateContainerDimensions = () => {
			if (!containerRef.current) return;

			containerDimensionsRef.current = {
				width: containerRef.current.offsetWidth,
				height: containerRef.current.offsetHeight,
			};

			if (!canvasRef.current) return;
			canvasRef.current.width = containerDimensionsRef.current.width;
			canvasRef.current.height = containerDimensionsRef.current.height;

			drawCanvasImageWithOffsets();
		};

		updateContainerDimensions();

		window.addEventListener("resize", updateContainerDimensions);

		return () => {
			window.removeEventListener("resize", updateContainerDimensions);
		};
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

				imageDimensionsRef.current = getImageDimensionsToFit(
					containerDimensionsRef.current,
					imageOriginalDimensionsRef.current,
				);

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
		if (rAFRef.current) {
			cancelAnimationFrame(rAFRef.current);
		}

		if (!animeRef.current?.complete) {
			animeRef.current?.pause();
		}

		animeRef.current = anime({
			targets: animationRef.current,
			scale: state.scale,
			duration: 700,
			easing: "easeInOutExpo",
			autoplay: true,
			update: (animation) => {
				animateFrames(animation);
			},
		});
	}, [state, animateFrames]);

	useEffect(() => {
		let initialX = 0;
		let initialY = 0;

		let initialAnimationX = 0;
		let initialAnimationY = 0;

		// move image center with mouse drag
		const onMouseMove = (e: MouseEvent) => {
			if (!containerRef.current) return;

			const { clientX, clientY } = e;
			const { left, top } = containerRef.current.getBoundingClientRect();

			const x = clientX - left;
			const y = clientY - top;

			animationRef.current.x = initialAnimationX + x - initialX;
			animationRef.current.y = initialAnimationY + y - initialY;

			drawCanvasImageWithOffsets();
		};

		const onMouseUp = () => {
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseup", onMouseUp);

			// calculate offset and re-align the image to the border
			const { width, height } = imageDimensionsRef.current;
			const { x, y, scale } = animationRef.current;

			const containerWidth = containerDimensionsRef.current.width;
			const containerHeight = containerDimensionsRef.current.height;

			const scaledWidth = width * scale;
			const scaledHeight = height * scale;

			const imageLeft = x - scaledWidth / 2;
			const imageRight = x + scaledWidth / 2;
			const imageTop = y - scaledHeight / 2;
			const imageBottom = y + scaledHeight / 2;

			let offsetXToMove = 0;
			let offsetYToMove = 0;

			if (imageLeft < 0 && imageRight < containerWidth) {
				offsetXToMove = containerWidth - imageRight;
			}

			if (imageRight > containerWidth && imageLeft > 0) {
				offsetXToMove = -imageLeft;
			}

			if (imageTop < 0 && imageBottom < containerHeight) {
				offsetYToMove = containerHeight - imageBottom;
			}

			if (imageBottom > containerHeight && imageTop > 0) {
				offsetYToMove = -imageTop;
			}

			if (!offsetXToMove && !offsetYToMove) {
				return;
			}

			let finalOffsetX = x + offsetXToMove;
			let finalOffsetY = y + offsetYToMove;

			if (canvasRef.current) {
				if (
					scale <= 1 &&
					(Math.abs(offsetXToMove) > 0 || Math.abs(offsetYToMove) > 0)
				) {
					finalOffsetX = canvasRef.current.width / 2;
					finalOffsetY = canvasRef.current.height / 2;
				}

				if (Math.abs(offsetXToMove) > 0 && scaledWidth < containerWidth) {
					finalOffsetX = canvasRef.current.width / 2;
				}

				if (Math.abs(offsetYToMove) > 0 && scaledHeight < containerHeight) {
					finalOffsetY = canvasRef.current.height / 2;
				}
			}

			if (rAFRef.current) cancelAnimationFrame(rAFRef.current);

			if (animeRef.current?.progress !== 100) {
				animeRef.current = null;
			}

			animeRef.current = anime({
				targets: animationRef.current,
				x: finalOffsetX,
				y: finalOffsetY,
				duration: 700,
				easing: "easeOutElastic",
				autoplay: true,
				update: (animation) => {
					animateFrames(animation);
				},
			});
		};

		const onMouseDown = (e: MouseEvent) => {
			if (!containerRef.current) return;
			const { left, top } = containerRef.current.getBoundingClientRect();

			initialX = e.clientX - left;
			initialY = e.clientY - top;

			initialAnimationX = animationRef.current.x;
			initialAnimationY = animationRef.current.y;

			document.addEventListener("mousemove", onMouseMove);
			document.addEventListener("mouseup", onMouseUp);
		};

		if (!containerRef.current) return;
		containerRef.current.addEventListener("mousedown", onMouseDown);
		containerRef.current.addEventListener("mouseup", onMouseUp);

		return () => {
			containerRef.current?.removeEventListener("mousedown", onMouseDown);
			containerRef.current?.removeEventListener("mouseup", onMouseUp);
		};
	}, [animateFrames, drawCanvasImageWithOffsets]);

	return (
		<StyledDivContainer ref={containerRef} data-rivx-view>
			<StyledCanvas ref={canvasRef} />
		</StyledDivContainer>
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
