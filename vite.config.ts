import path from "node:path";
import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import dts from "vite-plugin-dts"; // https://vitejs.dev/config/

const ReactCompilerConfig = {};

// https://vitejs.dev/config/
export default defineConfig({
	publicDir: false,
	css: {
		transformer: "lightningcss",
	},
	build: {
		lib: {
			formats: ["es"],
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "React Image Viewer",
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
				},
			},
		},
	},
	plugins: [
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
			},
		}),
		dts({
			insertTypesEntry: true,
			tsconfigPath: path.resolve(__dirname, "tsconfig.app.json"),
		}),
	],
});
