describe('Login Suite', function(){
    it('Valid login', function() {
        cy.visit("https://www.mytheresa.com/en-de/men.html")
        cy.wait(2000);
    })
})