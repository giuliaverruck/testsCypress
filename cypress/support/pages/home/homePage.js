import homePageLocators from '../../locators/home/homePageLocators';

class homePage {
  // Funções para interagir com elementos da página de autenticação
  static redirectLoginPage() {
    cy.get(homePageLocators.loginButton).click();
  }
}

export default homePage;
