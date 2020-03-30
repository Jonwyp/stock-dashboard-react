describe("stock-dashboard", () => {
  it("should render title when visiting stock-dashboard", () => {
    cy.clearCookies();
    cy.visit("http://localhost:3001/");
    cy.reload();
    cy.get(".search h1").contains("U.S. Stocks Dashboard");
  });
  it("should show dashboard after logging in", () => {
    cy.get("input[placeholder='username']").type("stockguru");
    cy.get("input[placeholder='password']").type("123456789");
    cy.get("button")
      .first()
      .click();
  });
  it("should show detailed stock information on dashboard after logging in", () => {
    cy.get(".stockdetailed-header").contains("Detailed Stock Information");
  });
});
