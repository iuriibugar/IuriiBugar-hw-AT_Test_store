export function login(user){
    cy.visit('/');
    cy.get('[class="active menu_home"]').focus();
    cy.get('[class="menu_text"]').contains('Account').click();
        
    cy.get('#loginFrm_loginname').click().type(user.Login_name);
    cy.get('#loginFrm_password').click().type(user.Password);

    cy.get('[title="Login"]').click();

   // cy.get('.heading1', {timeout: 2000}).should('contain', user.First_Name);
}