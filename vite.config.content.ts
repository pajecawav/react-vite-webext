import { defineConfig } from "vite";
import packageJson from "./package.json";
import { isDev, r } from "./scripts/utils";
import { sharedConfig } from "./vite.config";

// bundling the content script using Vite
export default defineConfig({
	...sharedConfig,
	build: {
		watch: isDev ? {} : undefined,
		outDir: r("extension/dist/contentScripts"),
		cssCodeSplit: false,
		emptyOutDir: false,
		sourcemap: isDev ? "inline" : false,
		lib: {
			entry: r("src/contentScripts/index.tsx"),
			name: packageJson.name,
			formats: ["iife"],
		},
		rollupOptions: {
			output: {
				entryFileNames: "index.global.js",
				extend: true,
			},
		},
	},
	define: {
		...sharedConfig.define,
		// in Vite v3 `process.env` doesn't work in library mode
		// see https://github.com/vitejs/vite/issues/9186
		"process.env.NODE_ENV": isDev ? '"development"' : '"production"',
	},
	plugins: sharedConfig.plugins,
});
