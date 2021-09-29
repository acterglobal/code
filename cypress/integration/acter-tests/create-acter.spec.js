/// <reference types="cypress" />

context('Create Acter ', () => {
  // beforeEach(() => {
  //   cy.loginUser().then(() => {
  //     cy.visit('http://localhost:3000/dashboard')

  //   })
  // })

  it('Click new Acter', () => {
    cy.visit('http://localhost:3000/dashboard')
    cy.get('a[href*="/acters/new"]').click()
    cy.wait(5000)
    cy.get('h5').should('have.text', '+ Add')
    cy.get('h6').should('have.text', 'Create').click()
    
  })
})
