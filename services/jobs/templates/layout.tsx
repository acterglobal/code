import React, { FC } from 'react'

import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlSection,
  MjmlStyle,
  MjmlText,
  MjmlTitle,
} from 'mjml-react'

export const EmailLayout: FC = ({ children }) => (
  <Mjml>
    <MjmlHead>
      <MjmlFont
        name="Montserrat"
        href="https://fonts.googleapis.com/css?family=Montserrat"
      />
      <MjmlTitle>Test</MjmlTitle>
      <MjmlStyle>
        {`
        .avatar {
          border: 1px solid black;
          border-radius: 50%;
          width: 64px;
          height: 64px;
        }
        .post-content {
          border-left: 3px solid #666;
          background-color: #f0f0f0;
          margin: 1em 1em 2em;
          padding: 0.25em 0.5em;
        }
        `}
      </MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f6f6f6">
      <MjmlSection backgroundColor="#fff">
        <MjmlColumn>
          <MjmlImage src="https://images.acter.global/assets/acter-logo-text.webp?w=400" />
        </MjmlColumn>
      </MjmlSection>
      {children}
      <MjmlSection>
        <MjmlColumn>
          <MjmlText
            color="#999999"
            align="center"
            fontFamily="Montserrat, Arial, non-serif"
          >
            Acter ApS, Filmbyen 11A, 3. sal, DK-8000 Aarhus C, Denmark
            <br /> Don't like these emails?{' '}
            <a href="{{baseUrl}}/profile/notifications">
              Manage my profile
            </a> or <a href="[unsubscribe]">unsubscribe</a>.
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
)
