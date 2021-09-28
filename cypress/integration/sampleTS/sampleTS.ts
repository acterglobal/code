/* eslint-disable jest/no-export */
/* eslint-disable jest/expect-expect */
describe('Reg form', () => {
  it('enter some value', () => {
    cy.visit('https://qavbox.github.io/demo/signup/')
    cy.get('#username').type('qavbox')
    cy.get("input[name='home']").click()
  })
})

export {}
