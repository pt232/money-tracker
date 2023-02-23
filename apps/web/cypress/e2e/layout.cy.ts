describe("layout", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("toggles dark mode", () => {
    cy.getByData("dark-mode-btn").click();
    cy.get("body").should("have.class", "dark");
  });

  it("opens sidebar and visits pages", () => {
    cy.getByData("menu-btn").click();

    cy.getByData("nav-list")
      .get("a")
      .each(($a) => {
        cy.wrap($a).click();
        cy.get("h1").should("have.text", $a.text());
        cy.getByData("menu-btn").click();
      });
  });

  it("navigates to not found page and back", () => {
    cy.visit("/this-url-does-not-exist");
    cy.getByData("not-found-heading").should("be.visible");
    cy.getByData("home-link").click();
    cy.location("pathname").should("eq", "/");
  });
});

export {};
