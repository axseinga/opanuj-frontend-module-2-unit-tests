import { configDefaults, defineConfig } from "vitest/config";
import { mergeConfig } from "vite";

const PLAYWRIGHT_TESTS = ["**/tests/e2e/**/*.spec.ts"];

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./setupTests.ts",
      exclude: [...configDefaults.exclude, ...PLAYWRIGHT_TESTS],
    },
  })
);
