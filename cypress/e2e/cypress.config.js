const { defineConfig } = require('cypress')
export default defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    specPattern: "**/*.cy.{js,jsx,ts,tsx}"
  },
  env: {
    name: "Giulia",
    email: "giuliavtor@mail.com",
    password: "TeSte123@",
    lastName: "Tortola",
    company: "NTT DATA",
    address: "Rua da Flores, 245, Bairro Inexistente",
    state: "SC",
    city: "Cidade Invisível",
    zipCode: '00000000',
    mobileNumber: '+55888880988888',
    validEmail: 'giulia@mail.com',
    validPassword: "TeSte123@",
    invalidEmail: "giulia@mailing.com",
    validPassword: "TeSte123@",
    nameUsed: "Giulia",
    emailUsed: "giulia@mail.com"

  }
});
