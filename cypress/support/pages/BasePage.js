export default class BasePage{
    
    constructor(){
        this.elemets = {};
        this.elemets.headerAccountButton = '.topnavbar [data-id="menu_account"]';
    }

    getHeaderAccountButton(){
        return cy.get(this.elemets.headerAccountButton);
    }
}