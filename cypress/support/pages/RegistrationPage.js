import BasePage from "./BasePage";

class RegistrationPage extends BasePage{

    constructor(){
        super();
        this.elements = {}
        this.elements.firstNameField = '[name="firstname"]';
        this.elements.lastNameField = '#AccountFrm_lastname';
        this.elements.emailField = '#AccountFrm_email';
        this.elements.address1Field = '#AccountFrm_address_1';
        this.elements.cityField = '#AccountFrm_city';
        this.elements.countryField = '[id="AccountFrm_country_id"]';
        this.elements.zoneIdField = '#AccountFrm_zone_id';
        this.elements.postcodeField = '#AccountFrm_postcode';
        this.elements.loginNameField = '[id="AccountFrm_loginname"]';
        this.elements.passwordField = '[id="AccountFrm_password"]';
        this.elements.passwordConfirmButton = '[id="AccountFrm_confirm"]';

        this.elements.newsLetterCheckbox = '[id="AccountFrm_newsletter0"]';
        this.elements.privacypolicyCheckbox = '[id="AccountFrm_agree"]';
        this.elements.submitRegistrationFormButton = '[class="btn btn-orange pull-right lock-on-click"]';
    }

    getFirstNameField(){
        return cy.get(this.elements.firstNameField)
    }

    getLastNameField(){
        return cy.get(this.elements.lastNameField)
    }

    getEmailField(){
        return cy.get(this.elements.emailField)
    }

    getAddress1Field(){
        return cy.get(this.elements.address1Field)
    }

    getCityField(){
        return cy.get(this.elements.cityField)
    }

    getCountryField(){
        return cy.get(this.elements.countryField)
    }

    getZoneIdField(){
        return cy.get(this.elements.zoneIdField)
    }

    getPostcodeField(){
        return cy.get(this.elements.postcodeField)
    }

    getLoginNameField(){
        return cy.get(this.elements.loginNameField)
    }

    getPasswordField(){
        return cy.get(this.elements.passwordField)
    }

    getPasswordConfirmButton(){
        return cy.get(this.elements.passwordConfirmButton)
    }

    getNewsLetterCheckbox(){
        return cy.get(this.elements.newsLetterCheckbox)
    }

    getPrivacypolicyCheckbox(){
        return cy.get(this.elements.privacypolicyCheckbox)
    }

    getSubmitRegistrationFormButton(){
        return cy.get(this.elements.submitRegistrationFormButton)
    }

    fillregistrationFields(user){
        this.getFirstNameField().click().type(user.First_Name);
        this.getLastNameField().click().type(user.Last_Name);
        this.getEmailField().click().type(user.EMail);
        this.getAddress1Field().click().type(user.Address_1);
        this.getCityField().click().type(user.City);
        this.getCountryField().select(user.Country);
        this.getZoneIdField().select(user.Region_State);
        this.getPostcodeField().click().type(user.ZIP_Code);
        this.getLoginNameField().click().type(user.Login_name);
        this.getPasswordField().click().type(user.Password);
        this.getPasswordConfirmButton().click().type(user.Password);
      
    }
}
export default new RegistrationPage();