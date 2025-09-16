import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import type { Plugin } from "vite";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import viteCompression from "vite-plugin-compression";
import Inspect from "vite-plugin-inspect";
import svgr from "vite-plugin-svgr";
import virtualModules from "./src/plugins/virtual_modules.plugins";

export default defineConfig({
	base: process.env.VITE_BASE_PATH || "/news-blog",
	plugins: [
		react(),
		svgr(),
		checker({
			typescript: true,
			biome: true,
		}),
		viteCompression({
			algorithm: "brotliCompress",
			ext: ".br",
		}),
		Inspect(),
		visualizer({ filename: "stats.html", open: true }) as unknown as Plugin,
		tailwindcss(),
		virtualModules(),
	],
	build: {
		minify: "terser",
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
			mangle: {
				properties: true,
			},
			format: {
				comments: false,
			},
		},
	},
	resolve: {
		alias: {
			"@": "/src",
		},
	},
});
