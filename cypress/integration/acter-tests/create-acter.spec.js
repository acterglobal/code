/* eslint-disable jest/expect-expect */
/* eslint-disable no-undef */
/// <reference types="cypress" />

context('Create Acter ', () => {
  beforeEach(() => {
    cy.loginUser().then((user) => {
      cy.visit('http://localhost:3000/dashboard')

    })
  })

  it('Click new Acter', () => {
    cy.visit('http://localhost:3000/dashboard')
    cy.get('a[href*="/acters/new"]').click()
    cy.wait(2000)
    cy.get('h5', {
      timeout: 5000
    }).should('be.visible')
    cy.get('h5').should('have.text', '+ Add')
  
    cy.get('div[id="organisation"]').click()
    
    
    const acterName = 'test acter 1'
    const acterLocation = 'Nairobi'

    // First form page
    cy.get('input[name=name]', {
      timeout: 8000
    }).should('be.visible') 
    
    cy.get('input[name=name]').type(`${acterName}`)
    cy.get('input[name=location]').type(`${acterLocation}`)

    cy.contains('Continue', {
      timeout: 8000
    }).click()
    cy.contains('Continue', {
      timeout: 8000
    }).click()

    cy.contains('Air').click()

    // Complete create Acter
    // cy.contains('Submit').click()

  })
})
