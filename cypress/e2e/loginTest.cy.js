import "cypress-real-events/support";
import HomePage from "../support/pageObjects/HomePage"
describe('Login Suite', () => {
  beforeEach(function () {
    cy.fixture('example').then(function (data) {
      this.data = data[0]
      this.data2 = data[1]
    })
    const homePage = new HomePage()
    cy.visit(Cypress.env('url'))


  })

  it('Valid Login Test 1', function () {
    const homePage = new HomePage()
    // Login 
    cy.login(this.data.email, this.data.password)
    homePage.getAccount().should('be.visible').should('contain', 'My Account')
    homePage.getAccount().realHover('mouse')
    cy.contains(`Hi ${this.data.name}`).should('be.visible')
    // Logout
    homePage.getLogoutBtn().click()
    homePage.getLoginBtn().should('be.visible')

    cy.wait(2000);

  })

  it('Valid Login Test 2', function () {
    const homePage = new HomePage()
    // Login 
    cy.login(this.data2.email, this.data2.password)
    homePage.getAccount().should('be.visible').should('contain', 'My Account')
    homePage.getAccount().realHover('mouse')
    cy.contains(`Hi ${this.data2.name}`).should('be.visible')
    // Logout
    homePage.getLogoutBtn().click()
    homePage.getLoginBtn().should('be.visible')

    cy.wait(2000);

  })

  it('Negative Login Test with invalid password', function () {
    const homePage = new HomePage()
    // Login 
    cy.login(this.data2.email, this.data.password)
    homePage.getUsernameText().should('be.visible')
    homePage.getLoginError().should('contain', 'The username or password')

    cy.wait(2000);

  })
  after(() => {
  })
})

