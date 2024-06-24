describe("Question rendereing", () => {
  it("render the question title", () => {
    cy.visit("http://localhost:5173/quiz-started");
    cy.get("[data-testid='question-testId']").should(($section) => {
      expect($section).to.exist;
      expect($section).to.have.text(
        "Which is the most popular JavaScript framework?"
      );
    });
  });
});
