describe("login page", () => {
  it("submits the form and navigates to the homepage", () => {
    cy.visit("/login");

    cy.get("input[type='email']").type("test@example.com");
    cy.get("input[type='password']").type("password");
    cy.get("button[type='submit']").click();

    cy.location("pathname").should("eq", "/");
  });
});

export {};
