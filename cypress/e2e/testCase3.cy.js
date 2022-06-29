import Appwrite from "../support/pageObjects/Appwrite"

describe('Pull Requests Test Suite', () => {

    it('Write a list of all open PRs into CSV file', async () => {
        const appwrite = new Appwrite()

        cy.once('uncaught:exception', () => false);

        cy.visit('https://github.com/appwrite/appwrite/pulls', {
            headers: {
                "User-Agent": "axios/0.18.0"
            }
        })

        appwrite.getPrFilter().should('have.value', 'is:pr is:open ')
        cy.writeFile('cypress/fixtures/open_prs.csv', 'PR name\tCreated Date\tAuthor')

        cy.savePR()

        cy.get("body").then($body => {
            if ($body.find('[class="next_page disabled"]').length < 1) {
                cy.contains('Next').click()
                appwrite.getPrFilter().should('be.visible')
                cy.savePR()

            }

        })

        cy.get("body").then($body => {
            if ($body.find('[class="next_page disabled"]').length < 1) {
                cy.contains('Next').click()
                appwrite.getPrFilter().should('be.visible')
                cy.savePR()

            }

        })
        
    })

})