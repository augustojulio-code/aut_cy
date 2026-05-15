import { loginPage } from './page_objects/Login_page';

Cypress.Commands.add('login', () => {
  cy.session('defaultUser', () => {
    loginPage.visit();
    loginPage.login(
      Cypress.env('USUARIO_PADRAO'),
      Cypress.env('SENHA')
    );
    cy.url().should('include', '/inventory.html');
  });
});
