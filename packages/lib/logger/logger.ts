import { createLogger, format, transports } from 'winston'

const logger = createLogger({
  level: process.env.NEXT_PUBLIC_LOG_LEVEL || 'info',
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.label(),
        format.simple()
      ),
    }),
    new transports.Console({
      level: 'error',
      format: format.combine(format.errors(), format.colorize()),
    }),
  ],
})

if (process.env.NEXT_PUBLIC_LOG_LEVEL === 'debug') {
  logger.clear().add(
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.prettyPrint({ colorize: true })
      ),
    })
  )
}

if (process.env.NODE_ENV === 'production') {
  logger.clear().add(
    new transports.Console({
      format: format.combine(format.timestamp(), format.json()),
    })
  )
}

export { logger }
