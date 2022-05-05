import { createLogger, format, transports } from 'winston'

const logger = createLogger({
  level: process.env.NEXT_PUBLIC_LOG_LEVEL || 'info',
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
    new transports.Console({
      level: 'error',
      format: format.combine(format.errors(), format.colorize()),
    }),
  ],
})

export { logger }
