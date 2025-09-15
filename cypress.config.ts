import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:8080",
    specPattern: "e2e/**/*.cy.{js,jsx,ts,tsx}",
    defaultCommandTimeout: 10000,
    supportFile: false,
    video: false,
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
