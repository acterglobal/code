/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable no-undef */

context('Logging in', () => {
  it('Should login', () => {
    cy.loginUser().then((user) => {
      expect(user.email).to.equal(Cypress.env('auth0Username'))
    })
  })
})