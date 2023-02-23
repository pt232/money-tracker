/// <reference types="cypress" />

Cypress.Commands.add("login", (email: string, password: string) => {
  cy.get("input[type='email']").type(email);
  cy.get("input[type='password']").type(password);
  cy.get("button[type='submit']").click();
});

Cypress.Commands.add("getByData", (selector: string) => {
  return cy.get(`[data-testid='${selector}']`);
});

export {};
