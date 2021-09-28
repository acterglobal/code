/* eslint-disable jest/valid-expect */

/* eslint-disable jest/no-export */

/* eslint-disable no-undef */

/* eslint-disable jest/valid-expect-in-promise */

/* eslint-disable jest/expect-expect */
// describe('login', () => {
//   it('should successfully log into our app', () => {
//     cy.visit('http://localhost:3000/dashboard').loginAsAdmin()
//   })
// })
// import 'cypress-localstorage-commands'
// describe('postToken', () => {
//   before(() => {
//     cy.login()
//     cy.saveLocalStorage()
//   })
//   beforeEach(() => {
//     cy.restoreLocalStorage()
//   })
//   it('should exist identity in localStorage', () => {
//     cy.getLocalStorage('identity_token').should('exist')
//     cy.getLocalStorage('identity_token').then((token) => {
//       console.log('Identity token', token)
//     })
//     cy.visit('http://localhost:3000/dashboard')
//   })
//   it('should still exist identity in localStorage', () => {
//     cy.getLocalStorage('identity_token').should('exist')
//     cy.getLocalStorage('identity_token').then((token) => {
//       console.log('Identity token', token)
//     })
//   })
// })
// describe('access secret admin functionality', () => {
// it('should be able to navigate to', () => {
// cy.visitHome().loginAsAdmin()
// .get('[href="/secret-adminny-stuff"]') // This link should only be visible to admins
// .click()
// .url()
// .should('contain', 'secret-adminny-stuff/'); // non-admins should be redirected away from this url
// })
// })
import { mount } from '@cypress/react'

import { Dashboard } from '@acter/components/dashboard'

describe('login', () => {
  it('should successfully log into our app', () => {
    cy.clearLocalStorage()

    cy.login()

    it('Renders page component', () => {
      mount(<Dashboard />)
      cy.contains('You have not created any Organisations or Networks.')
    })
  })
})

export {}
