import sendgrid from '@sendgrid/mail'

import nodemailer from 'nodemailer'

import { getLogger } from '@acter/lib/logger'

export interface Email {
  to: string
  subject: string
  text: string
  html: string
}

export interface CreateEmailReturn {
  html: string
  text: string
}

interface EmailInternal extends Email {
  from: string
}

const l = getLogger('sendEmail')

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendEmail = async (email: Email): Promise<any> => {
  const mail: EmailInternal = {
    ...email,
    from: process.env.EMAIL_FROM,
  }
  if (process.env.SENDGRID_API_KEY) {
    try {
      l.debug('Sending email via SendGrid')
      sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
      return sendgrid.send(mail)
    } catch (e) {
      l.error('Error sending via sendgrid', e, e.response?.body?.errors)
      throw e
    }
  }

  l.debug('Sending email via nodemailer')
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
  })
  return transport.sendMail(mail)
}
