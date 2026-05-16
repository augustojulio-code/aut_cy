import { Before } from '@badeball/cypress-cucumber-preprocessor';

Before({ tags: '@needsAuth' }, () => {
  cy.login();
});
