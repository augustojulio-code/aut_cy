import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../page_objects/Login_page";

Given("que eu acesso a página de login", () => {
  loginPage.visit();
});

When("eu insiro o usuário {string} e a senha {string} e clico no botão de login", (usuario, senha) => {
  const user = Cypress.env(usuario) ?? usuario;
  const pass = Cypress.env(senha) ?? senha;
  loginPage.login(user, pass);
});

Then("devo ser redirecionado para a página de inventário", () => {
  cy.url().should("include", "/inventory.html");
  cy.get(".title").should("have.text", "Products");
});

Then("devo ver a mensagem de erro {string}", (mensagem) => {
  loginPage.validateErrorMessage(mensagem);
});
