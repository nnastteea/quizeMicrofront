describe("Start page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("it should be shown the start screen", () => {
    cy.get('[data-cy="start-screen-container"]').should("be.visible");
    cy.get('[data-cy="user-name-input"]').should("be.visible");
    cy.get('[data-cy="start-quize-button"]')
      .should("be.visible")
      .and("contain", "Start");
  });
  it("it should be shown the notification when u forget input name", () => {
    cy.get('[data-cy="start-quize-button"]').click();
    cy.get('[data-cy="notification-message"]')
      .should("be.visible")
      .and("contain", "You should input your name!");
  });
  it("it should be new page with quize", () => {
    cy.get('[data-cy="user-name-input"]').type("testUser");
    cy.get('[data-cy="start-quize-button"]').click();
    cy.url().should("include", "/quize");
    cy.get('[data-cy="quize-screen-container"]').should("exist");
  });
});
