describe('autorization Test', () => {

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
        
        cy.get('#loginFrm_loginname').click().type(dataImput.Login_name);
        cy.get('#loginFrm_password').click().type(dataImput.Password);

        cy.get('[title="Login"]').click();
        
  })
})
})