describe("Progress bar render", () => {
  it("Progress elements should be rendered", () => {
    cy.visit("http://localhost:5173/quiz-started");
    cy.get("[data-testid='progress-bar-testId']").should("exist");

    cy.get("[role='status']").first().should("have.text", "Question 1 / 35");
    cy.get("[role='status']").eq(1).should("have.text", "0/600");
  });
});
