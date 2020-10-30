describe("Open the site", () => {
  it("Opens the site for testing!", () => {
    cy.visit("../../pages/index.html");
    cy.get("#element").trigger("click");
  });
});
