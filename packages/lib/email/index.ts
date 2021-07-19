import nodemailer from 'nodemailer'
import sendgrid from '@sendgrid/mail'
import { Environments } from '../constants'

export interface Email {
  to: string
  subject: string
  content: string
}

interface EmailInternal extends Email {
  from: string
  text: string
  html: string
}

export const sendEmail = async (email: Email) => {
  const mail: EmailInternal = {
    ...email,
    from: process.env.EMAIL_FROM,
    text: email.content,
    html: email.content,
  }
  if (process.env.NODE_ENV === Environments.PRODUCTION) {
    const { content: _content, ...sendmailMsg } = mail
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
    return await sendgrid.send(sendmailMsg)
  }

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
  })
  return await transport.sendMail(mail)
}
