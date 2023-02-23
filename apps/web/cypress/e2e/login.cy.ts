describe("login page", () => {
  it("submits the form and navigates to the homepage", () => {
    cy.visit("/login");
    cy.login("test@example.com", "password");
    cy.location("pathname").should("eq", "/");
  });
});

export {};
