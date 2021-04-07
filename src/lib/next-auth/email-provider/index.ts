import nodemailer from 'nodemailer'
import sendgrid from '@sendgrid/mail'
import logger from './logger'

interface ProviderEmailOptions {
  server?: string | ProviderEmailServer
  from?: string
}

interface ProviderEmailServer {
  host: string
  port: number
  auth: ProviderEmailAuth
  tls?: TLS
}

interface ProviderEmailAuth {
  user: string
  pass: string
}

interface TLS {
  rejectUnauthorized: boolean
}

interface SenderProps {
  url: string
  site: string
}

interface EmailSenderProps extends SenderProps {
  email: string
}

interface SendVerificationRequestProps {
  identifier: string
  url: string
  baseUrl: string
  provider: ProviderEmailOptions
}

export const sendVerificationRequest = async ({
  identifier: email,
  url,
  baseUrl,
  provider,
}: SendVerificationRequestProps): Promise<null> => {
  const { server, from } = provider
  // Strip protocol from URL and use domain as site name
  const site = baseUrl.replace(/^https?:\/\//, '')

  const mailObj = {
    to: email,
    from,
    subject: `Sign in to ${site}`,
    text: text({ url, site }),
    html: html({ url, site, email }),
  }

  //TODO: refactor this into its own lib\
  if (process.env.NODE_ENV === 'production') {
    try {
      sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
      await sendgrid.send(mailObj)
      logger.debug('SEND_VERIFICATION_EMAIL_SUCCESS')
      return
    } catch (err) {
      logger.error('SEND_VERIFICATION_EMAIL_ERROR', email, err)
      throw err
    }
  }

  // Sillyness to get around server maybe being a string
  let nodemailerServer
  if (typeof server === 'string') {
    nodemailerServer = {
      host: String(server),
      port: 1025,
      tls: {
        rejectUnauthorized: false
      }
    }
  } else {
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {auth, ...serverWithoutAuth} = server
    nodemailerServer = {
      ...serverWithoutAuth,
      tls: {
        rejectUnauthorized: false
      }
    }
  }

  nodemailer.createTransport(nodemailerServer).sendMail(mailObj, (error) => {
    if (error) {
      logger.error('SEND_VERIFICATION_EMAIL_ERROR', email, error)
      throw 'SEND_VERIFICATION_EMAIL_ERROR' + error
    }
  })
}

// Email HTML body
const html = ({ url, site, email }: EmailSenderProps): string => {
  // Insert invisible space into domains and email address to prevent both the
  // email address and the domain from being turned into a hyperlink by email
  // clients like Outlook and Apple mail, as this is confusing because it seems
  // like they are supposed to click on their email address to sign in.
  const escapedEmail = `${email.replace(/\./g, '&#8203;.')}`
  const escapedSite = `${site.replace(/\./g, '&#8203;.')}`

  // Some simple styling options
  const backgroundColor = '#f9f9f9'
  const textColor = '#444444'
  const mainBackgroundColor = '#ffffff'
  const buttonBackgroundColor = '#346df1'
  const buttonBorderColor = '#346df1'
  const buttonTextColor = '#ffffff'

  return `
<body style="background: ${backgroundColor};">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding: 10px 0px 20px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        <strong>${escapedSite}</strong>
      </td>
    </tr>
  </table>
  <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center" style="padding: 10px 0px 0px 0px; font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        Sign in as <strong>${escapedEmail}</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}"><a href="${url}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; text-decoration: none;border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">Sign in</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        If you did not request this email you can safely ignore it.
      </td>
    </tr>
  </table>
</body>
`
}

// Email Text body (fallback for email clients that don't render HTML, e.g. feature phones)
const text = ({ url, site }: SenderProps): string =>
  `Sign in to ${site}\n${url}\n\n`
