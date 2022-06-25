import "cypress-real-events/support";
describe('Login Suite', () => {
  beforeEach(function () {
    cy.fixture('example').then(function (data) {
      this.data = data[0]
      this.data2 = data[1]
    })
    // cy.visit('https://www.mytheresa.com/en-de/men.html')
    cy.visit('https://www.konga.com')

    // cy.get('#myaccount').should('be.visible')
    cy.get('[href="/account/login?return_url=/"]').should('be.visible')
    // cy.get("[id='myaccount']").click()
    cy.get('[href="/account/login?return_url=/"]').click()
    cy.get('[for="username"]').should('be.visible')
  })

  it('Valid Login Test 1', function () {
    
    // cy.get('#email').type(this.data.email)
    cy.get('#username').type(this.data.email)
    // cy.get('#pass').type(this.data.password)
    cy.get('#password').type(this.data.password)
    // cy.get('#send2').click()
    cy.get('[action="/account/login"] [type="submit"]').click()
    cy.get('[href="/account/profile"]:nth-child(1) > span').should('be.visible').should('contain', 'My Account')
    // cy.get('[href="/account/profile"] > span').trigger('mouseover')
    cy.get('[href="/account/profile"] > span').realHover('mouse')
    cy.contains(`Hi ${this.data.name}`).should('be.visible')
    cy.get('[class="de870_2eIHs a2562_2y9Sv"]').click()
    cy.get('[href="/account/login?return_url=/"]').should('be.visible')
    cy.wait(2000);

  })
  it('Valid Login Test 2', function () {
    
    cy.get('#username').type(this.data2.email)
    // cy.get('#pass').type(this.data.password)
    cy.get('#password').type(this.data2.password)
    // cy.get('#send2').click()
    cy.get('[action="/account/login"] [type="submit"]').click()
    cy.get('[href="/account/profile"]:nth-child(1) > span').should('be.visible').should('contain', 'My Account')
    // cy.get('[href="/account/profile"] > span').trigger('mouseover')
    cy.get('[href="/account/profile"] > span').realHover('mouse')
    cy.contains(`Hi ${this.data2.name}`).should('be.visible')
    cy.get('[class="de870_2eIHs a2562_2y9Sv"]').click()
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