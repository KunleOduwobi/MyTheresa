class Appwrite{

    getPrFilter(){
        return cy.get('#js-issues-search')
    }
    NextPageOff(){
        return cy.get('[class="next_page disabled"]')
    }
    getPrNames(){
        return cy.get('[data-hovercard-type="pull_request"]')
    }
    getPrDates(){
        return cy.get('[class="opened-by"] > relative-time')
    }
    getPrAuthors(){
        return cy.get('[class="opened-by"] > a')
    }    

}
export default Appwrite;