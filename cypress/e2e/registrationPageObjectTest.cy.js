import user from '../fixtures/user.json'
import { faker } from '@faker-js/faker';
import homePage from '../support/pages/HomePage'
import loginPage from '../support/pages/LoginPage';
import registrationPage from '../support/pages/RegistrationPage';
import accountPage from '../support/pages/AccountPage';

user.EMail = faker.internet.email({provider: 'fakeMail.com' });
user.Login_name = faker.internet.userName();
user.First_Name = faker.person.firstName();
user.Last_Name = faker.person.lastName();
user.fax = faker.phone.number();
user.phone = faker.phone.number();
user.companyName = faker.company.name();
user.ZIP_Code = faker.location.zipCode('#####');



describe('Successfull registration', () => {

    it('Registration', () => {
      homePage.visit();

      cy.log('Opening registration page...');
      homePage.getHeaderAccountButton().click();      
      loginPage.getRegisterAccountButton().click();

      //cy.get('[class="btn btn-orange pull-right"]').contains('Continue').click();
      
      cy.log('Fill in registration fields...');
      registrationPage.fillregistrationFields(user);


      cy.log('Submit registration form...')
      registrationPage.getNewsLetterCheckbox().click();
      registrationPage.getPrivacypolicyCheckbox().click();
      registrationPage.getSubmitRegistrationFormButton().click();

      cy.log('Verify first name displayed on account page...')
      accountPage.getFirstNameText().should('contain', user.First_Name);
        
  })
  
  it('Autorization', () => {
    cy.visit('/');
    cy.get('[class="active menu_home"]').focus();
    cy.get('[class="menu_text"]').contains('Account').click();
    
    cy.get('#loginFrm_loginname').click().type(user.Login_name);
    cy.get('#loginFrm_password').click().type(user.Password);

    cy.get('[title="Login"]').click();
    
    cy.get('.heading1', {timeout: 2000}).should('contain', user.First_Name);
  })

})



/*
describe('Registration fields validation', () => {

  const user = [
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



      it('Registration without FirstName', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('[class="active menu_home"]').focus();
        cy.get('[class="menu_text"]').contains('Account').click();
        cy.get('[class="btn btn-orange pull-right"]').contains('Continue').click();
        
        cy.get('[name="firstname"]').click().type(user.First_Name);
        cy.get('#AccountFrm_lastname').click().type(user.Last_Name);
        cy.get('#AccountFrm_email').click().type(user.EMail);
        cy.get('#AccountFrm_address_1').click().type(user.Address_1);
        cy.get('#AccountFrm_city').click().type(user.City);
        
        cy.get('[id="AccountFrm_country_id"]').select(user.Country);
        cy.get('#AccountFrm_zone_id').select(user.Region_State);
        cy.get('#AccountFrm_postcode').click().type(user.ZIP_Code);

        cy.get('[id="AccountFrm_loginname"]').click().type(user.Login_name);
        cy.get('[id="AccountFrm_password"]').click().type(user.Password);
        cy.get('[id="AccountFrm_confirm"]').click().type(user.Password);

        cy.get('[id="AccountFrm_newsletter0"]').click();
        cy.get('[id="AccountFrm_agree"]').click();

        cy.get('[class="btn btn-orange pull-right lock-on-click"]').click();

        cy.get('.heading1', {timeout: 2000}).should('contain', 'firstname');
        
  
})
})
*/