import "./App.css";
import { ImageViewer } from "./components/image-viewer.tsx";

function App() {
	return (
		<div className="w-[800px] h-[450px]">
			<ImageViewer src={"/sample-image.png"} alt={"Sample Image"} />
		</div>
	);
}

export default App;
