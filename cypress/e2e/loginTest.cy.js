import "cypress-real-events/support";
import HomePage from "../support/pageObjects/HomePage"
describe('Login Suite', () => {
  beforeEach(function () {
    cy.fixture('example').then(function (data) {
      this.data = data[0]
      this.data2 = data[1]
    })
    const homePage = new HomePage()
    // cy.visit('/')
    cy.visit(Cypress.env('url'))

    // cy.get('#myaccount').should('be.visible')
    homePage.getLoginBtn().should('be.visible')
    // cy.get("[id='myaccount']").click()
    homePage.getLoginBtn().click()
    homePage.getUsernameText().should('be.visible')
  })

  it('Valid Login Test 1', function () {
    const homePage = new HomePage()

    // cy.get('#email').type(this.data.email)
    homePage.getUsernameField().type(this.data.email)
    // cy.get('#pass').type(this.data.password)
    homePage.getPasswordField().type(this.data.password)
    // cy.get('#send2').click()
    homePage.getLoginSubmitBtn().click()
    homePage.getAccount().should('be.visible').should('contain', 'My Account')
    // cy.get('[href="/account/profile"] > span').trigger('mouseover')
    homePage.getAccount().realHover('mouse')
    cy.contains(`Hi ${this.data.name}`).should('be.visible')
    homePage.getLogoutBtn().click()
    homePage.getLoginBtn().should('be.visible')
    cy.wait(2000);

  })
  it('Valid Login Test 2', function () {
    const homePage = new HomePage()

    // cy.get('#email').type(this.data.email)
    homePage.getUsernameField().type(this.data2.email)
    // cy.get('#pass').type(this.data.password)
    homePage.getPasswordField().type(this.data2.password)
    // cy.get('#send2').click()
    homePage.getLoginSubmitBtn().click()
    homePage.getAccount().should('be.visible').should('contain', 'My Account')
    // cy.get('[href="/account/profile"] > span').trigger('mouseover')
    homePage.getAccount().realHover('mouse')
    cy.contains(`Hi ${this.data2.name}`).should('be.visible')
    homePage.getLogoutBtn().click()
    homePage.getLoginBtn().should('be.visible')
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