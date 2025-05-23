import { defineConfig } from '@playwright/test';

export const BASE_URL = 'https://thinking-tester-contact-list.herokuapp.com/';

export default defineConfig({
  use: {
    baseURL: BASE_URL,
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  testDir: './tests',
});