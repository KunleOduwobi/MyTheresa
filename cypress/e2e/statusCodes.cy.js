describe('API Suite', () => {
    it('First Test', () => {
        cy.request('GET', 'https://www.mytheresa.com/int_en/men/new-arrivals/current-week.html')
            .then(function (response) {
                expect(response.status).to.eq(200)
            })
    })

    it('Error Test', () => {
        let windowError;

        Cypress.on('window:before:load', (win) => {
            windowError = cy.spy(win.console, 'error');
        });
        const Delay = 1000;

        cy.visit(Cypress.env('url'))

        cy.wait(Delay).then(() => {
            expect(windowError).to.not.be.called;
        });


        // cy.visit(Cypress.env('url'), {

        //     onBeforeLoad(win) {
        //       cy.stub(win.console, 'log').as('consoleLog')
        //       cy.stub(win.console, 'error').as('consoleError')
        //     }
        //   })

        //   //...
        //   cy.get('@consoleLog').should('be.calledWith', 'Hello World!')
        //   cy.get('@consoleError').should('be.calledOnce')
    })

})