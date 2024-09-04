import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: `src/tests/e2e`,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: `src/tests/playwright/html-report` }],
  ],
  use: {
    baseURL: process.env.E2E_TESTS_BASE_URL || 'http://localhost:5173',
    trace: 'on',
    extraHTTPHeaders: {
			"x-vercel-protection-bypass":
				process.env.VERCEL_AUTOMATION_BYPASS_SECRET!,
		},
  },
  outputDir: `src/tests/playwright/test-results`,
});
