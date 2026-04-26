import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../page_objects/Login_page";

Given("que eu acesso a página de login", () => {
  loginPage.visit();
});

When("eu insiro o usuário {string} e a senha {string} e clico no botão de login", (usuario, senha) => {
  loginPage.login(usuario, senha);
});

Then("devo ser redirecionado para a página de inventário", () => {
  cy.url().should("include", "/inventory.html");
  cy.get(".title").should("have.text", "Products");
});
