import 'allure-cypress';
import './commands';

afterEach(() => {
   cy.clearAllCookies();
  //cy.clearAllLocalStorage();
});
