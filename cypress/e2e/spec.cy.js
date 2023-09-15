describe('template spec', () => {

  const name = "HAAASSSOISNDOIEMCD"
  let email = "aaaaAaaaa@joda.com"
  let password = "a12345SS6a789s"
  let lastName = "TortolSSSaaaa"
  let company = "NTT DATA"
  let adress = "Rua da Flores, 245, Bairro Inexistente"
  let state = "SC"
  let city = "Cidade Invisível"
  let zipCode = '00000000'
  let mobileNumber='+55888880988888'
  it('Validação primeira etapa cadastro', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button]"').click()
  })

  it.only('Validação cadastro completo', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"').click()
    cy.get("#id_gender2").click()
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
   // cy.get('b').should('have.value',"ACCOUNT CREATED!")JJJ
  })
})
