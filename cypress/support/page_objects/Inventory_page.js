import BasePage from './BasePage';

class InventoryPage extends BasePage {

  elements = {
    productList: () => cy.get('.inventory_list'),
    productItems: () => cy.get('.inventory_item'),
    sortDropdown: () => cy.get('.product_sort_container'),
  }

  visit() {
    this.navigate('/inventory.html');
  }

  sortBy(ordenacao) {
    this.elements.sortDropdown().select(ordenacao);
  }

}

export const inventoryPage = new InventoryPage();
