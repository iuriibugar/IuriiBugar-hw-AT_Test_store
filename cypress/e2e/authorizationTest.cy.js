import user from '../fixtures/user.json'
import {login} from '../support/helper'
import { faker } from '@faker-js/faker'

describe('autorization Test', () => {


  it('Autorization valid test', () => {
    cy.visit('/')
    cy.get('[class="active menu_home"]').focus();
    cy.get('[class="menu_text"]').contains('Account').click();
        
    cy.get('#loginFrm_loginname').click().type(user.Login_name);
    cy.get('#loginFrm_password').click().type(user.Password);

    cy.get('[title="Login"]').click();

    cy.get('.heading1', {timeout: 2000}).should('contain', user.First_Name);
        
  })


  it.only('Autorization with invalid loginName', () => {
    
    user.Login_name = faker.animal.bear()
    login(user);

    cy.get('[class="alert alert-error alert-danger"]', { timeout: 2000 })
    .invoke('text') // Отримати текст з елементу
    .then((text) => {
      const cleanText = text.trim(); // Обрізати зайві пробіли
      expect(cleanText).to.include('Error: Incorrect login or password provided.');
    });
    //cy.get('[class="alert alert-error alert-danger"]', {timeout: 2000}).should('match', /Error: Incorrect login or password provided\./)    
  })
})