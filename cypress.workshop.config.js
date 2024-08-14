const { defineConfig } = require("cypress");

module.exports = defineConfig({
  extends: "./cypress.config.js",
  projectId: "tufpg7",
  key: "5da10669-022b-41a3-910c-c99477f00c05",
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.ts")(on, config);
    },
    testIsolation: false,
    specPattern: "./cypress/e2e/**/*.spec.ts",
  },
});
