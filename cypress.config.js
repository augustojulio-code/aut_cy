const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );
      const { allureCypress } = require('allure-cypress/reporter');
      allureCypress(on, config);
      return config;
    },
    baseUrl: "https://www.saucedemo.com",
    testIsolation: false,
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/**/*.feature",
  },
});
