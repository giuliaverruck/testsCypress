describe('template spec', () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/");
  });

  it('CT1: Validação cadastro completo', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').type(Cypress.env('name'));
    cy.get('[data-qa="signup-email"]').type(Cypress.env('email'));
    cy.get('[data-qa="signup-button"]').click();
    cy.get("#id_gender2", { timeout: 60000 }).click();
    cy.get('[data-qa="password"]').type(Cypress.env('password'));
    cy.get('[data-qa="days"]').select(10);
    cy.get('[data-qa="months"]').select(6);
    cy.get('[data-qa="years"]').select("1996");
    cy.get('[data-qa="first_name"]').type(Cypress.env('name'));
    cy.get('[data-qa="last_name"]').type(Cypress.env('lastName'));
    cy.get('#company').type(Cypress.env('company'));
    cy.get('#address1').type(Cypress.env('address'));
    cy.get('#country').select("Canada");
    cy.get('[data-qa="state"]').type(Cypress.env('state'));
    cy.get('#city').type(Cypress.env('city'));
    cy.get('#zipcode').type(Cypress.env('zipCode'));
    cy.get('#mobile_number').type(Cypress.env('mobileNumber'));
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible');
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
  });

  it('CT2: Login User with correct email', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-password"]').type(Cypress.env('validPassword'));
    cy.get('[data-qa="login-email"]').type(Cypress.env('validEmail'));
    cy.get('[data-qa="login-button"]').click();
  });

  it('CT3: Login with Incorrect Email', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-password"]').type(Cypress.env('validPassword'));
    cy.get('[data-qa="login-email"]').type(Cypress.env('invalidEmail'));
    cy.get('[data-qa="login-button"]').click();
    cy.get('.login-form > form > p').contains('Your email or password is incorrect!');
  });

  it('CT4: Logout User', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-password"]').type(Cypress.env('validPassword'));
    cy.get('[data-qa="login-email"]').type(Cypress.env('validEmail'));
    cy.get('[data-qa="login-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('.login-form > h2').contains('Login to your account');
  });

  it('CT5: Cadastro com Nome de Usuário já existente', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').type(Cypress.env("nameUsed"))
    cy.get('[data-qa="signup-email"]').type(Cypress.env('emailUsed'))
    cy.get('[data-qa="signup-button"]').click();
    cy.get('.signup-form > form > p').contains("Email Address already exist!");
  });
});
