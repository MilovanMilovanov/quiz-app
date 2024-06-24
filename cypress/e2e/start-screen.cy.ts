describe("StartScreen render", () => {
  it("StartScreen elements should be rendered", () => {
    cy.visit("http://localhost:5173/");
    cy.get("[data-testid='start-screen-testId']").should(($section) => {
      expect($section).to.exist;
      expect($section).to.contain.text("The React Quiz");
      expect($section).to.contain.text("Welcome to The React Quiz");
      expect($section).to.contain.text(
        "35 questions to test your React mastery"
      );
      expect($section).to.contain.text("Let's start");
    });
  });
});
