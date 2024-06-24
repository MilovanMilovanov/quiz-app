const options = ["Angular", "React", "Svelte", "Vue"];

describe("Options rendering", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/quiz-started");
  });

  it("Should render all options", () => {
    cy.get("[data-testid='options-testId']").should("exist");

    cy.get("[role='button']").should(($buttons) => {
      expect($buttons).to.have.length(4);
      $buttons.each((index, button) => {
        expect(button.textContent).to.equal(options[index]);
      });
    });

    cy.get("[data-testid='nextQuestion-testId']").should("not.exist");
  });

  it("Button with text - Next, should be vissible", () => {
    cy.get("[role='button']").first().click();
    cy.get("[data-testid='nextQuestion-testId']").should("exist");
  });

  it("Options should have css property pointer-events-none, after option is seelcted", () => {
    cy.get("[role='button']").should(($buttons) => {
      expect($buttons).to.exist;
      $buttons.each((_, button) => {
        button.click();
        expect(button).to.have.css("pointer-events", "none");
      });
    });
  });

  it("Correct option should remain it's horizontal position", () => {
    let initialPosition;

    cy.get("[role='button']")
      .eq(1)
      .then(($button) => {
        initialPosition = $button[0].getBoundingClientRect();
        cy.wrap($button).click();
        cy.wait(500);
      });

    cy.get("[role='button']")
      .eq(1)
      .then(($newButton) => {
        const newPosition = $newButton[0].getBoundingClientRect();
        expect(initialPosition.left).to.equal(newPosition.left);
      });
  });

  it("Wrong option should change it's horizontal position", () => {
    let initialPosition;

    cy.get("[role='button']")
      .first()
      .then(($button) => {
        initialPosition = $button[0].getBoundingClientRect();
        cy.wrap($button).click();
        cy.wait(500);
      });

    cy.get("[role='button']")
      .first()
      .then(($newButton) => {
        const newPosition = $newButton[0].getBoundingClientRect();

        expect(initialPosition.left).to.not.equal(newPosition.left);
      });
  });
});
