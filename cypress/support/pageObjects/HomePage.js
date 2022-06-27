class HomePage{

    getMyAccount(){
        return cy.get('#myaccount')
    }
    getLoginBtn(){
        return cy.get('[href="/account/login?return_url=/"]')
    }
    getLoginForm(){
        return cy.get('#customer-flyout-login')
    }
    getUsernameField(){
        return cy.get('#email')
    }
    getPasswordField(){
        return cy.get('#pass')
    }
    getLoginSubmitBtn(){
        return cy.get('#send2')
    }
    getWelcomeMsg(){
        return cy.get('[class="hello hs1"]')
    }
    getAccountNav(){
        return cy.get('.customer-name')
    }
    getLogoutBtn(){
        return cy.get('.logout')
    }
    getLoginError() {
        return cy.get('[class="error-msg"] > ul > li > span')
    }

}
export default HomePage;