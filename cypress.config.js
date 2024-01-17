const { defineConfig } = require("cypress");
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:8080',
    env: {
      apiUrl: 'http://localhost:3333',
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);

      return config;
    },
  },
});
