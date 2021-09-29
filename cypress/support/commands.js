/// <reference types="cypress" />

/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */

Cypress.Commands.add('getUserInfo', (accessToken) => {
  return new Cypress.Promise((resolve, reject) => {
    auth.client.userInfo(accessToken, (err, user) => {
      if (err) {
        reject(err)
      }

      resolve(user)
    })
  })
})

Cypress.Commands.add('loginUser', () => {
    cy.login().then(() => {
      cy.request({
        method: 'POST',
        url: Cypress.env('auth0Url'),
        body: {
          grant_type: 'password',
          username: Cypress.env('auth0Username'),
          password: Cypress.env('auth0Password'),
          audience: Cypress.env('auth0Audience'),
          scope: Cypress.env('auth0Scope'),
          client_id: Cypress.env('auth0ClientId'),
          client_secret: Cypress.env('auth0ClientSecret'),
        },
      }).then(({ body }) => {
        cy.getCookie(Cypress.env('auth0SessionCookieName')).should('exist')

        const {access_token } = body

        cy.getUserInfo(access_token).then((user) => {
          window.localStorage.setItem('token', JSON.stringify(access_token))
          return user
        })      
      })
    })
})

