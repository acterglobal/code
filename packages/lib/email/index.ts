import nodemailer from 'nodemailer'
import sendgrid from '@sendgrid/mail'
import { Environments } from '../constants'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export interface Email {
  to: string
  subject: string
  text: string
  html: string
}

interface EmailInternal extends Email {
  from: string
}

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendEmail = async (email: Email): Promise<any> => {
  const mail: EmailInternal = {
    ...email,
    from: process.env.EMAIL_FROM,
  }
  if (process.env.NODE_ENV === Environments.PRODUCTION) {
    return await sendgrid.send(mail)
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
