describe("Application health", () => {
  it("Should load the page", () => {
    cy.visit("/");
    cy.contains("Tasks");
  });
});
