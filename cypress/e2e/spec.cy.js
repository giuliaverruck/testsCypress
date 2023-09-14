describe('template spec', () => {

  const name = "HAOISNDOIEMCD"
  let email = "aaaaaa@jdpasjoda.com"
  let password = "a123456a789s"
  let lastName = "Tortolaaaa"
  let company = "NTT DATA"
  let adress = "Rua da Flores, 245, Bairro Inexistente"
  let state = "SC"
  let city = "Cidade Invisível"
  let zipCode = '00000000'
  let mobileNumber='+5588888888888'
  it('Validação primeira etapa cadastro', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"').click()
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

  })
})
