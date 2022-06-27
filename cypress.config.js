const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  failOnStatusCode: false,
  // pageLoadTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // "baseUrl": "https://www.mytheresa.com/int_en/men.html",
    "env":
    {
      "url": "https://www.mytheresa.com",
      "local": "https://local.mytheresa.com",
      "staging": "https://staging.mytheresa.com",
      "test": "https://test.mytheresa.com"
    }

  },
});
