describe("Do Test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="user-name-input"]').type("testUser");
    cy.get('[data-cy="start-quize-button"]').click();
    cy.url().should("include", "/quize");
  });
  it("it should do all test and be shown the result screen", () => {
    cy.get('[data-cy="quize-screen-container"]').should("exist");
    cy.get('[data-cy="quize-screen-container"]')
      .find('[data-cy="question-block"]', { timeout: 15000 })
      .should("exist");
    for (let i = 0; i < 10; i++) {
      cy.get('[data-cy="answer"]').should("be.visible").first().click();
      cy.get('[data-cy="next-question"]').should("be.visible").click();
    }
    cy.get('[data-cy="result-container"]').should("be.visible");
    cy.get('[data-cy="result"]').should("exist");
  });
  it("it should be shown the wrong answer with the help of red color", () => {
    cy.get('[data-cy="answer"]').contains("7").click();
    cy.get('[data-cy="answer"]')
      .contains("7")
      .parent()
      .should("have.css", "background-color", "rgb(178, 56, 80)");
  });
  it("it should be shown the right answer with the help of green color", () => {
    cy.get('[data-cy="answer"]').contains("8").click();
    cy.get('[data-cy="answer"]')
      .contains("8")
      .parent()
      .should("have.css", "background-color", "rgba(175, 210, 117, 1)");
  });
});
