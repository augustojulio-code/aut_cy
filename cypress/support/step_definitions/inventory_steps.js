import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import { inventoryPage } from '../page_objects/Inventory_page';

Given('que estou na página de inventário', () => {
  cy.url().should("include", "/inventory.html");
});

Then('devo ver a lista de produtos', () => {
  inventoryPage.elements.productList().should('be.visible');
  inventoryPage.elements.productItems().should('have.length.greaterThan', 0);
});
