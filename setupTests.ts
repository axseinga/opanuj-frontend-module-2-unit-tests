import '@testing-library/jest-dom'; // Provides custom jest matchers for asserting on DOM nodes.
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Extend Vitest's expect with jest-dom matchers
expect.extend({
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  ...require('@testing-library/jest-dom/matchers'),
});

afterEach(() => {
  cleanup();
});