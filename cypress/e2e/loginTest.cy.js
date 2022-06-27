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
    cy.visit(Cypress.env('url')+'/en-de/men.html')

    
  })

  it('Valid Login Test 1', function () {
    const homePage = new HomePage()

    // Login
    cy.login(this.data.email, this.data.password)
    cy.url().should('include','/customer/account')
    homePage.getWelcomeMsg().should('be.visible').should('contain', `Hello,  ${this.data.name}!`)
    homePage.getMyAccount().trigger('mouseover')
    // cy.get('[href="/account/profile"] > span').trigger('mouseover')
    // homePage.getAccount().realHover('mouse')
    homePage.getAccountNav().should('be.visible').should('contain', `${this.data.name}`)

    // Logout
    homePage.getLogoutBtn().click()
    cy.url().should('include','/account/logoutSuccess')
    homePage.getMyAccount().trigger('mouseover')
    homePage.getUsernameField().should('be.visible')
    cy.wait(2000);

  })

  it('Valid Login Test 2', function () {
    const homePage = new HomePage()

    // Login
    cy.login(this.data2.email, this.data2.password)
    cy.url().should('include','/customer/account')
    homePage.getWelcomeMsg().should('be.visible').should('contain', `Hello,  ${this.data2.name}!`)
    homePage.getMyAccount().trigger('mouseover')
    homePage.getAccountNav().should('be.visible').should('contain', `${this.data2.name}`)

    // Logout
    homePage.getLogoutBtn().click()
    cy.url().should('include','/account/logoutSuccess')
    homePage.getMyAccount().trigger('mouseover')
    homePage.getUsernameField().should('be.visible')
    cy.wait(2000);
  })

  it('Negative Login Test with invalid password', function () {
    const homePage = new HomePage()
    // Login 
    cy.login(this.data2.email, this.data.password)
    cy.url().should('include','/customer/account/login')
    homePage.getLoginError().should('contain', 'Invalid login or password.')

    cy.wait(2000);

  })

  after(() => {
  })
})
