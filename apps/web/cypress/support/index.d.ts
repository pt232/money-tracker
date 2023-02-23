declare namespace Cypress {
  interface Chainable {
    login(email: string, password: string): void;
    getByData(selector: string): Chainable;
  }
}
