const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    video: true, // Asegúrate de que la grabación de video esté habilitada
    videosFolder: "cypress/videos", // Usa la carpeta existente para los videos
    defaultCommandTimeout: 10000, // Aumenta el tiempo de espera de los comandos
    pageLoadTimeout: 60000 // Aumenta el tiempo de espera para la carga de páginas
  },
});
