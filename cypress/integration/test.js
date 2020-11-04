describe("Open the site", () => {
  it("Opens the site for testing!", () => {
    cy.visit("../../pages/index.html");
    cy.get("#element").trigger("mouseover");
    cy.get("#element").trigger("mouseleave");
    cy.get("tooltip").should("exist").should('have.text', 'Test');
    cy.wait(1000);
    cy.get("tooltip").should("not.exist");
  });
});
