import "./App.css";
import { ImageViewer } from "./components/image-viewer.tsx";

function App() {
	const url = "https://picsum.photos/id/15/1200/800";
	const urlVertical = "https://picsum.photos/id/237/200/300";

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}
		>
			<div
				style={{
					width: 800,
					height: 450,
					position: "relative",
				}}
			>
				<ImageViewer src={url} alt={"Sample Image"} />
			</div>
			<div
				style={{
					width: 800,
					height: 450,
					position: "relative",
				}}
			>
				<ImageViewer src={urlVertical} alt={"Sample Image"} />
			</div>
		</div>
	);
}

export default App;
