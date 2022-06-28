import HomePage from "../support/pageObjects/HomePage"
import Appwrite from "../support/pageObjects/Appwrite"
import "cypress-real-events/support";

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
    cy.wait(20000)
});

Cypress.Commands.add('savePR', () => {
    const appwrite = new Appwrite()
    appwrite.getPrNames().each(($pulls, index, $list) => {
        appwrite.getPrDates().eq(index).then(function (createdDate) {
            // cy.log(createdDate.text())
            appwrite.getPrAuthors().eq(index).then(function (author) {

                cy.writeFile('cypress/fixtures/test3.csv', `\n${$pulls.text()}\t${createdDate.text()}\t${author.text()}`, { flag: 'a+' })
            })
        })

    })
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