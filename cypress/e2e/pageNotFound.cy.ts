describe("Page not found", () => {
  it("Invalid endpoint text", () => {
    cy.visit("http://localhost:5173/false-endpoint");
    cy.get("[role='status']").should(($element) => {
      expect($element).to.exist;
      expect($element).to.contain.text("404");
      expect($element).to.contain.text("Invalid endpoint.");
    });
  });
});
