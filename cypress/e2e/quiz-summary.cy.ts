describe("QuizSummary rendering", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/quiz-summary");
  });

  it("Should render the correct texts ", () => {
    cy.get("[data-testid='quiz-summary-testId']").should(($section) => {
      expect($section).to.exist;
      expect($section).to.contain.text("You scored 0 out of 600 (0%)");
      expect($section).to.contain.text("Highscore: 0 points");
    });
  });

  it("Button with text - Restart Quiz, should be vissible", () => {
    cy.get("[data-testid='restartQuiz-testId']").should(($button) => {
      expect($button).to.exist;
      expect($button).to.have.text("Restart Quiz");
    });
  });
});
