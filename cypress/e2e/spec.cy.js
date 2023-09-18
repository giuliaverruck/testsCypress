describe('template spec', () => {

  let name = "Giulia"
  let email = "giuliavtor@mail.com"
  let password = "TeSte123@"
  let lastName = "Tortola"
  let company = "NTT DATA"
  let adress = "Rua da Flores, 245, Bairro Inexistente"
  let state = "SC"
  let city = "Cidade Invisível"
  let zipCode = '00000000'
  let mobileNumber='+55888880988888'

  it(' CT1: Validação cadastro completo', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"').click()
    cy.get("#id_gender2", {timeout:60000}).click()
    cy.get('[data-qa="password"]').type(password)
    cy.get('[data-qa="days"]').select(10)
    cy.get('[data-qa="months"]').select(6)
    cy.get('[data-qa="years"]').select("1996")
    cy.get('[data-qa="first_name"]').type(name)
    cy.get('[data-qa="last_name"]').type(lastName)
    cy.get('#company').type(company)
    cy.get('#address1').type(adress)
    cy.get('#country').select("Canada")
    cy.get('[data-qa="state"]').type(state)
    cy.get('#city').type(city)
    cy.get('#zipcode').type(zipCode)
    cy.get('#mobile_number').type(mobileNumber)
    cy.get('[data-qa="create-account"]').click()
    cy.get('[data-qa="continue-button"]').click()
    cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
  })

  it('CT2: Login User with correct email', () => {
    let validEmail = "giulia@mail.com"
    let validPassword = "TeSte123@"
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-password"]').type(validPassword);
    cy.get('[data-qa="login-email"]').type(validEmail);
    cy.get('[data-qa="login-button"]').click()
  })
  it('CT3: Login with Incorrect Email', ()=>{
    let invalidEmail = "giulia@mailing.com"
    let validPassword = "TeSte123@"
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-password"]').type(validPassword);
    cy.get('[data-qa="login-email"]').type(invalidEmail);
    cy.get('[data-qa="login-button"]').click()
    cy.get('.login-form > form > p').contains('Your email or password is incorrect!')
  })

  it('CT4: Logout User', () => {
    let validEmail = "giulia@mail.com"
    let validPassword = "TeSte123@"
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-password"]').type(validPassword);
    cy.get('[data-qa="login-email"]').type(validEmail);
    cy.get('[data-qa="login-button"]').click()
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form > h2').contains('Login to your account')
  })

  it(' CT5: Cadastro com Nome de Usuário já existente', () => {
    let nameUsed = "Giulia"
    let emailUsed = "giulia@mail.com"
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type(nameUsed);
    cy.get('[data-qa="signup-email"]').type(emailUsed);
    cy.get('[data-qa="signup-button"').click()
    cy.get('.signup-form > form > p').contains("Email Address already exist!")
    
  })
})
