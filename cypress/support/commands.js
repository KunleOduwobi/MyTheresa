import HomePage from "../support/pageObjects/HomePage"
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//

Cypress.Commands.add('hover', selector => {
    cy.get(selector).rightclick();
});

Cypress.Commands.add('login', (email, password) => {
    const homePage = new HomePage()

    homePage.getMyAccount().should('be.visible')
    homePage.getMyAccount().trigger('mouseover')
    homePage.getLoginForm().should('be.visible')
    homePage.getUsernameField().type(email)
    homePage.getPasswordField().type(password)
    homePage.getLoginSubmitBtn().click()
});
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })