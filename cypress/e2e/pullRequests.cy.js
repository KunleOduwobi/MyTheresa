describe('Pull Requests', () => {



    it('list of PR in CSV format', async () => {
        let createdDateText = ''
        cy.once('uncaught:exception', () => false);

        cy.visit('https://github.com/appwrite/appwrite/pulls', {
            headers: {
                "User-Agent": "axios/0.18.0"
            }
        })

        cy.get('#js-issues-search').should('have.value', 'is:pr is:open ')
        cy.writeFile('cypress/fixtures/test3.csv', 'PR name\tCreated Date\tAuthor')

        cy.get('[data-hovercard-type="pull_request"]').each(($pulls, index, $list) => {
            cy.get('[class="opened-by"] > relative-time').eq(index).then(function (createdDate) {
                cy.log(createdDate.text())
                cy.get('[class="opened-by"] > a').eq(index).then(function (author) {

                    cy.writeFile('cypress/fixtures/test3.csv', `\n${$pulls.text()}\t${createdDate.text()}\t${author.text()}`, { flag: 'a+' })
                })
            })

        })
        cy.wait(3000)

        cy.get("body").then($body => {
            if ($body.find('[class="next_page disabled"]').length < 1) {
                cy.contains('Next').click()
                cy.wait(3000)

                cy.get('[data-hovercard-type="pull_request"]').each(($pulls, index, $list) => {
                    cy.get('[class="opened-by"] > relative-time').eq(index).then(function (createdDate) {
                        cy.log(createdDate.text())
                        cy.get('[class="opened-by"] > a').eq(index).then(function (author) {

                            cy.writeFile('cypress/fixtures/test3.csv', `\n${$pulls.text()}\t${createdDate.text()}\t${author.text()}`, { flag: 'a+' })
                        })
                    })

                })

            }

        })
        cy.wait(3000)

        cy.get("body").then($body => {
            if ($body.find('[class="next_page disabled"]').length < 1) {
                cy.contains('Next').click()
                cy.wait(3000)

                cy.get('[data-hovercard-type="pull_request"]').each(($pulls, index, $list) => {
                    cy.get('[class="opened-by"] > relative-time').eq(index).then(function (createdDate) {
                        cy.log(createdDate.text())
                        cy.get('[class="opened-by"] > a').eq(index).then(function (author) {

                            cy.writeFile('cypress/fixtures/test3.csv', `\n${$pulls.text()}\t${createdDate.text()}\t${author.text()}`, { flag: 'a+' })
                        })
                    })

                })

            }

        })
        cy.wait(3000)
    })

})