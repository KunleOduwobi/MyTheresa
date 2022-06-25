const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "https://konga.com/",
    // "env":
    // {
    //   "url": "https://konga.com/",
    //   "url2": "https://www.konga.com/category/accessories-computing-5227"
    // }

  },
});
