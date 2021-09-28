/* eslint-disable jest/valid-expect */
/* eslint-disable jest/no-standalone-expect */
/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-localstorage-commands"
import * as jwt from "jsonwebtoken"
import auth0 from "auth0-js"
import Iron from '@hapi/iron'
import 'cypress-nextjs-auth0'

Cypress.Commands.add('login', (overrides = {}) => {
  Cypress.log({
    name: 'loginViaAuth0',
  });

  const options = {
    method: 'POST',
    url: Cypress.env('auth_url'),
    body: {
      grant_type: 'password',
      username: Cypress.env('auth_username'),
      password: Cypress.env('auth_password'),
      audience: Cypress.env('auth_audience'),
      scope: 'openid profile email',
      client_id: Cypress.env('auth_client_id'),
      client_secret: Cypress.env('auth_client_secret'),
    },
  };
  cy.request(options).then(({body}) => {
    cy.request('http://localhost:3000/api/auth/me').then(({body: user}) => {
      expect(user).to.have.property('sub');
      expect(user).to.have.property('email');

        const { email, sub } = user;
        console.log('This is email ', email)
        console.log('This is sub ', sub)
    })
    
    const claims = jwt.decode(body.id_token)
    // console.log('This is claims ', claims)

    const {
      nickname,
      name,
      picture,
      updated_at,
      email,
      email_verified,
      sub,
      exp,
    } = claims

    const item = {
      body: {
        ...body,
        decodedToken: {
          claims,
          user: {
            nickname,
            name,
            picture,
            updated_at,
            email,
            email_verified,
            sub,
          },
          audience: Cypress.env('auth_audience'),
          client_id: Cypress.env('auth_client_id'),
        },
      },
      expiresAt: exp,
    }

    window.localStorage.setItem('auth0Cypress', JSON.stringify(item))
    cy.visit('http://localhost:3000')

    // cy.visit('http://localhost:3000/', {
    //   onBeforeLoad: win => {
    //     win.localStorage.setItem('auth0Cypress', JSON.stringify(item))
    //   }
    // })
  })
});

// Using 2nd method with cypress nextjs auth0 package

// import auth0 from 'auth0-js';
// import Iron from '@hapi/iron';

const auth = new auth0.WebAuth({
  domain: Cypress.env('auth0_domain'),
  clientID: Cypress.env('auth_client_id'),
});

Cypress.Commands.add('getUserInfo', (accessToken) => {
  return new Cypress.Promise((resolve, reject) => {
    auth.client.userInfo(accessToken, (err, user) => {
      if (err) {
        reject(err);
      }

      resolve(user);
    });
  });
});

Cypress.Commands.add('_loginTestUser', (options = {}) => {
  return new Cypress.Promise((resolve, reject) => {
    auth.client.loginWithDefaultDirectory({
      username: Cypress.env('auth_username'),
      password: Cypress.env('auth_password'),
      audience: Cypress.env('auth_audience'),
      scope: 'openid profile email',
      // client_id: Cypress.env('auth_client_id'),
      client_secret: Cypress.env('auth_client_secret'),
    }, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
});

Cypress.Commands.add('seal', (thingToEncrypt) => {
  return new Cypress.Promise((resolve, reject) => {
    try {
      Iron.seal(thingToEncrypt, Cypress.env('auth0CookieSecret'), Iron.defaults).then((encryptedThing) => {
        resolve(encryptedThing);
      });
    } catch(error) {
      reject(error);
    }
  });
});

Cypress.Commands.add('login2', (overrides = {}) => {
  // cy.clearCookies(); // If needed

  /* https://github.com/auth0/nextjs-auth0/blob/master/src/handlers/login.ts#L70 */

  cy.setCookie('a0:state', 'some-random-state');

  cy._loginTestUser().then((response) => {
    const {
      accessToken,
      expiresIn,
      idToken,
      scope,
      tokenType,
    } = response;

    cy.getUserInfo(accessToken).then((user) => {

      /* https://github.com/auth0/nextjs-auth0/blob/master/src/handlers/callback.ts#L44 */
      /* https://github.com/auth0/nextjs-auth0/blob/master/src/handlers/callback.ts#L47 */
      /* https://github.com/auth0/nextjs-auth0/blob/master/src/session/cookie-store/index.ts#L57 */

      const persistedSession = {
        user,
        idToken,
        accessToken,
        accessTokenScope: scope,
        accessTokenExpiresAt: Date.now() + expiresIn,
        createdAt: Date.now(),
      };

      /* https://github.com/auth0/nextjs-auth0/blob/master/src/session/cookie-store/index.ts#L73 */

      cy.seal(persistedSession).then((encryptedSession) => {
        cy.setCookie('a0:session', encryptedSession);
      });
    });
  });
});
