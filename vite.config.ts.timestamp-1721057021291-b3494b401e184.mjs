// vite.config.ts
import path from "node:path";
import react from "file:///Users/ishan/WebstormProjects/image-viewer/node_modules/.pnpm/@vitejs+plugin-react@4.3.1_vite@5.3.3_@types+node@20.14.10_lightningcss@1.25.1_terser@5.31.2_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///Users/ishan/WebstormProjects/image-viewer/node_modules/.pnpm/vite@5.3.3_@types+node@20.14.10_lightningcss@1.25.1_terser@5.31.2/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/ishan/WebstormProjects/image-viewer/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.10_rollup@4.18.1_typescript@5.5.3_vite@5.3.3_@types+n_qw5mh7a46tltsenz4c275r2jca/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/ishan/WebstormProjects/image-viewer";
var vite_config_default = defineConfig({
  publicDir: false,
  css: {
    transformer: "lightningcss"
  },
  build: {
    lib: {
      formats: ["es"],
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "React Image Viewer",
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React"
        }
      }
    }
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: path.resolve(__vite_injected_original_dirname, "tsconfig.app.json")
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaXNoYW4vV2Vic3Rvcm1Qcm9qZWN0cy9pbWFnZS12aWV3ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9pc2hhbi9XZWJzdG9ybVByb2plY3RzL2ltYWdlLXZpZXdlci92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvaXNoYW4vV2Vic3Rvcm1Qcm9qZWN0cy9pbWFnZS12aWV3ZXIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRwdWJsaWNEaXI6IGZhbHNlLFxuXHRjc3M6IHtcblx0XHR0cmFuc2Zvcm1lcjogXCJsaWdodG5pbmdjc3NcIixcblx0fSxcblx0YnVpbGQ6IHtcblx0XHRsaWI6IHtcblx0XHRcdGZvcm1hdHM6IFtcImVzXCJdLFxuXHRcdFx0ZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2luZGV4LnRzXCIpLFxuXHRcdFx0bmFtZTogXCJSZWFjdCBJbWFnZSBWaWV3ZXJcIixcblx0XHRcdGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgaW5kZXguJHtmb3JtYXR9LmpzYCxcblx0XHR9LFxuXHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSxcblx0XHRcdG91dHB1dDoge1xuXHRcdFx0XHRnbG9iYWxzOiB7XG5cdFx0XHRcdFx0cmVhY3Q6IFwiUmVhY3RcIixcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcblx0cGx1Z2luczogW1xuXHRcdHJlYWN0KCksXG5cdFx0ZHRzKHtcblx0XHRcdGluc2VydFR5cGVzRW50cnk6IHRydWUsXG5cdFx0XHR0c2NvbmZpZ1BhdGg6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwidHNjb25maWcuYXBwLmpzb25cIiksXG5cdFx0fSksXG5cdF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1QsT0FBTyxVQUFVO0FBQ2pVLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFIaEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsV0FBVztBQUFBLEVBQ1gsS0FBSztBQUFBLElBQ0osYUFBYTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNKLFNBQVMsQ0FBQyxJQUFJO0FBQUEsTUFDZCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDN0MsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsU0FBUyxNQUFNO0FBQUEsSUFDdEM7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNkLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxNQUMvQixRQUFRO0FBQUEsUUFDUCxTQUFTO0FBQUEsVUFDUixPQUFPO0FBQUEsUUFDUjtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0gsa0JBQWtCO0FBQUEsTUFDbEIsY0FBYyxLQUFLLFFBQVEsa0NBQVcsbUJBQW1CO0FBQUEsSUFDMUQsQ0FBQztBQUFBLEVBQ0Y7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
