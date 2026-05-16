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
      config.baseUrl = config.env.BASE_URL;
      return config;
    },
    testIsolation: false,
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/**/*.feature",
    // Paralelismo - descomentar quando houver features organizadas em pastas por grupo
    // specPattern: process.env.CYPRESS_GROUP
    //   ? `cypress/e2e/features/${process.env.CYPRESS_GROUP}/**/*.feature`
    //   : "cypress/e2e/**/*.feature",
  },
});
