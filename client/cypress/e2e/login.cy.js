describe('Login Flow', () => {
  it('visits the app and checks heading', () => {
    cy.visit('http://localhost:5173');
    cy.contains('MERN Testing Assignment').should('exist');
  });
});
