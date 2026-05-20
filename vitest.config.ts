import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		environment: "node",
		globals: true,
		include: ["**/*.test.ts", "**/*.spec.ts"],
		exclude: [
			"node_modules",
			".next",
			"cypress",
			"tests/fixtures",
			"tests/helpers",
		],
		coverage: {
			provider: "v8",
			reporter: ["text", "lcov"],
			thresholds: {
				statements: 80,
				branches: 70,
				functions: 80,
				lines: 80,
			},
		},
	},
});
