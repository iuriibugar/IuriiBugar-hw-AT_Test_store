describe('registration Test', () => {

  const regData = [
    {
      First_Name: 'Iurii_Test',
      Last_Name: 'Test_test',
      EMail: 'qweqwe@gmail.com',
      Address_1: "primaryAdress",
      City: 'Kyibushev',
      Region_State: '3490',
      ZIP_Code: '535241',
      Country: '220',
      Login_name: 'qweqweTest',
      Password: '123456789'
    }]


    regData.forEach(dataImput => {
      it('passes', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('[class="active menu_home"]').focus();
        cy.get('[class="menu_text"]').contains('Account').click();
        cy.get('[class="btn btn-orange pull-right"]').contains('Continue').click();
        
        cy.get('[name="firstname"]').click().type(dataImput.First_Name);
        cy.get('#AccountFrm_lastname').click().type(dataImput.Last_Name);
        cy.get('#AccountFrm_email').click().type(dataImput.EMail);
        cy.get('#AccountFrm_address_1').click().type(dataImput.Address_1);
        cy.get('#AccountFrm_city').click().type(dataImput.City);
        
        cy.get('[id="AccountFrm_country_id"]').select(dataImput.Country);
        cy.get('#AccountFrm_zone_id').select(dataImput.Region_State);
        cy.get('#AccountFrm_postcode').click().type(dataImput.ZIP_Code);

        cy.get('[id="AccountFrm_loginname"]').click().type(dataImput.Login_name);
        cy.get('[id="AccountFrm_password"]').click().type(dataImput.Password);
        cy.get('[id="AccountFrm_confirm"]').click().type(dataImput.Password);

        cy.get('[id="AccountFrm_newsletter0"]').click();
        cy.get('[id="AccountFrm_agree"]').click();

        cy.get('[class="btn btn-orange pull-right lock-on-click"]').click();
        
  })
})
})