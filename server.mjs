import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import next from 'next'
import basicAuth from 'express-basic-auth'
import cryptoRandomString from 'crypto-random-string'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000

;(async () => {
  try {
    await app.prepare()
    const server = express()
    server.use(
      basicAuth({
        users: {
          admin:
            process.env.BASIC_AUTH_ADMIN_PASS ||
            cryptoRandomString({ length: 18, type: 'base64' }),
        },
        challenge: true,
        realm: cryptoRandomString({ length: 10 }),
      })
    )
    server.all('*', (req, res) => {
      return handle(req, res)
    })
    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`)
    })
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()
