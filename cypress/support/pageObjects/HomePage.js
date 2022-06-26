class HomePage {

    getMyAccount() {
        return cy.get('[href="/account/login?return_url=/category/accessories-computing-5227"]')
    }
    getLoginBtn() {
        return cy.get('[href="/account/login?return_url=/"]')
    }
    getUsernameText() {
        return cy.get('[for="username"]')
    }
    getUsernameField() {
        return cy.get('#username')
    }
    getPasswordField() {
        return cy.get('#password')
    }
    getLoginSubmitBtn() {
        return cy.get('[action="/account/login"] [type="submit"]')
    }
    getAccount() {
        return cy.get('[href="/account/profile"]:nth-child(1) > span')
    }
    getLogoutBtn() {
        return cy.get('[class="de870_2eIHs a2562_2y9Sv"]')
    }
    getLoginError() {
        return cy.get('[class="_9a1ab_k0UMi"]')
    }

}
export default HomePage;