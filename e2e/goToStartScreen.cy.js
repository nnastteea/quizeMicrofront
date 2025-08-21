describe("Go from test to start screen", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="user-name-input"]').type("testUser");
    cy.get('[data-cy="start-quize-button"]').click();
    cy.url().should("include", "/quize");
  });
  it("it should do test and after several answers it should go to the start screen", () => {
    cy.get('[data-cy="quize-screen-container"]').should("exist");
    cy.get('[data-cy="quize-screen-container"]')
      .find('[data-cy="question-block"]', { timeout: 15000 })
      .should("exist");
    for (let i = 0; i < 3; i++) {
      cy.get('[data-cy="answer"]').should("be.visible").first().click();
      cy.get('[data-cy="next-question"]').should("be.visible").click();
    }
    cy.get('[data-cy="return-start-screen-button"]', { timeout: 20000 })
      .should("exist")
      .should("be.visible")
      .click();

    cy.url().should("include", "/");
  });
});
