/* eslint-disable no-undef */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/expect-expect */

import { useUser } from '@acter/lib/user/use-user'


describe('login', () => {
  it('should successfully log into our app', () => {
    cy.clearLocalStorage()

    cy.login()
      .then((resp) => {
        return resp.body;
      })
      .then((body) => {
        const {access_token, expires_in, id_token} = body;
        const auth0State = {
          nonce: '',
          state: 'some-random-state'
        };
        const callbackUrl = `/callback#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`;
        cy.visit(callbackUrl, {
          onBeforeLoad(win) {
            win.document.cookie = 'com.auth0.auth.some-random-state=' + JSON.stringify(auth0State);
          }
        })
      })
  })
})