import HomePage from "../support/pageObjects/HomePage"
import "cypress-real-events/support";

describe('Login Suite', function () {
    it('Test hompage', function () {
        cy.once('uncaught:exception', () => false);
        const homePage = new HomePage()

        // cy.visit('/')
        cy.visit(Cypress.env('url') + '/en-de/men.html', {
            headers: {
                "User-Agent": "axios/0.18.0"
            }
        })
        homePage.getMyAccount().should('be.visible')
        homePage.getMyAccount().trigger('mouseover')
        homePage.getLoginForm().should('be.visible')
        homePage.getUsernameField().type('kunleo@maildrop.cc')
        // homePage.getMyAccount().click();
        cy.wait(5000);


    })
})