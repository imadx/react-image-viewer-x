import "./App.css";
import { ImageViewer } from "./components/image-viewer.tsx";

function App() {
	const url = "https://picsum.photos/id/15/1200/800";

	return (
		<div
			style={{
				width: 800,
				height: 450,
				position: "relative",
			}}
		>
			<ImageViewer src={url} alt={"Sample Image"} />
		</div>
	);
}

export default App;
