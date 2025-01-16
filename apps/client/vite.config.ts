import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	optimizeDeps: {
		include: ["../../packages/ui"],
		force: false, // Fuerza la reoptimización de dependencias
	},

	plugins: [reactRouter(), tsconfigPaths()],
});
