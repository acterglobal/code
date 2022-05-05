import { createLogger, format, transports } from 'winston'

const logger = createLogger({
  level: process.env.NEXT_PUBLIC_LOG_LEVEL || 'info',
})

if (process.env.NEXT_PUBLIC_LOG_LEVEL === 'debug') {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.errors({ stack: true }),
        format.timestamp(),
        format.prettyPrint({ colorize: true })
      ),
    })
  )
} else if (process.env.NODE_ENV === 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.errors({ stack: true }),
        format.timestamp(),
        format.json()
      ),
    })
  )
} else {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.errors({ stack: true }),
        format.colorize(),
        format.label(),
        format.simple()
      ),
    })
  )
}

export { logger }
