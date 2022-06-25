import "cypress-real-events/support";
describe('Login Suite', () => {
  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data
    })
  })

  it('Valid login', function () {
    // cy.visit('https://www.mytheresa.com/en-de/men.html')
    cy.visit('https://www.konga.com')
    // cy.wait(6000);

    // cy.get('#myaccount').should('be.visible')
    cy.get('[href="/account/login?return_url=/"]').should('be.visible')
    // cy.get("[id='myaccount']").click()
    cy.get('[href="/account/login?return_url=/"]').click()
    cy.wait(3000);
    // cy.get('#email').type(this.data.email)
    cy.get('#username').type(this.data.email)
    // cy.get('#pass').type(this.data.password)
    cy.get('#password').type(this.data.password)
    // cy.get('#send2')
    // .should('be.visible')
    // cy.get('#send2').click()
    cy.get('[action="/account/login"] [type="submit"]').click()
    cy.get('[href="/account/profile"]:nth-child(1) > span').should('be.visible').should('contain', 'My Account')
    cy.wait(3000);
    // cy.get('[href="/account/profile"] > span').trigger('mouseover')
    cy.get('[href="/account/profile"] > span').realHover('mouse')
    cy.contains('Hi Kunle').should('be.visible')
    cy.wait(2000);
    cy.get('[class="de870_2eIHs a2562_2y9Sv"]').click()
    cy.wait(3000);
    cy.get('[href="/account/login?return_url=/"]').should('be.visible')


    cy.wait(2000);

  })
  after(() => {
  })
})

// describe('My First Test', () => {
//   it('Visits the Kitchen Sink', () => {
//     cy.visit('https://local.mytheresa.com/en-de/men.html/')
//   })
// })