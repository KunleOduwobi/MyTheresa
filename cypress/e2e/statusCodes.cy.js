describe('API Suite', () => {

    it('Verify there are no JavaScript errors on MyTheresa', () => {
        cy.once('uncaught:exception', () => false);

        let windowError;

        Cypress.on('window:before:load', (win) => {
            windowError = cy.spy(win.console, 'error');
        });
        const Delay = 1000;

        cy.visit(Cypress.env('url') + '/en-de/men.html', {
            headers: {
                "User-Agent": "axios/0.18.0"
            }
        })
        cy.wait(Delay).then(() => {
            expect(windowError).to.not.be.called;
        });

    })

    it('Verify all pages on MyTheresa - Men return 200 or 30x status code', () => {
        cy.once('uncaught:exception', () => false);

        cy.visit(Cypress.env('url') + '/en-de/men.html', {
            headers: {
                "User-Agent": "axios/0.18.0"
            }
        })

        cy.get("a").each(page => {
            const link = page.prop('href')
            cy.request('GET', link)
                .then(function (response) {
                    (expect(response.status).to.eq(200)) || (expect(response.status).to.contain(30))
                })

        })
    })

    it('Verify all pages on MyTheresa - Men return no 40x status code', () => {
        cy.once('uncaught:exception', () => false);

        cy.visit(Cypress.env('url') + '/en-de/men.html', {
            headers: {
                "User-Agent": "axios/0.18.0"
            }
        })

        cy.get("a").each(page => {
            const link = page.prop('href')
            cy.request('GET', link)
                .then(function (response) {
                    expect(response.status).to.contain(40).to.equal(false)
                })

        })
    })

    // it('Returns status code of all links on MyTheresa - Men', () => {
    //     cy.once('uncaught:exception', () => false);

    //     cy.visit(Cypress.env('url') + '/en-de/men.html', {
    //         headers: {
    //             "User-Agent": "axios/0.18.0"
    //         }
    //     })
    //     // Get all links on the page
    //     cy.get("a").each(page => {
    //         const link = page.prop('href')
    //         cy.request({
    //             url: link,
    //             failOnStatusCode: false
    //         }).then(response => {
    //             Cypress.log({
    //                 name: link,
    //                 message: response.status
    //             })
    //         })
    //     })
    // })

})