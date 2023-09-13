import authPageLocators from '../../locators/auth/authPageLocators';
import url from ''
class AuthPage {
  // Funções para interagir com elementos da página de autenticação
  static login(username, password) {
    cy.get(authPageLocators.emailLoginInput).type(username);
    cy.get(authPageLocators.passwordInput).type(password);
    cy.get(authPageLocators.loginButton).click();
  }

  static registerUser(email, name) {
    cy.get(authPageLocators.emailRegisterInput).type(email);
    cy.get(authPageLocators.nameRegisterInput).type(name);
    cy.get(authPageLocators.registerButton).click();
  }
}

export default AuthPage;
