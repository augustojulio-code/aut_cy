import BasePage from './BasePage';

class InventoryPage extends BasePage {

  elements = {
    productList: () => cy.get('.inventory_list'),
    productItems: () => cy.get('.inventory_item'),
  }

  visit() {
    this.navigate('/inventory.html');
  }

}

export const inventoryPage = new InventoryPage();
