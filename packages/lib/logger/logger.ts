import { differenceInMilliseconds } from 'date-fns'
import pino, { transport, Level, Logger, LogFn, destination } from 'pino'

const level = process.env.NEXT_PUBLIC_LOG_LEVEL || ('info' as Level)

interface LoggerWithTimer extends Logger {
  startTimer: () => { done: LogFn }
}

const config =
  process.env.NODE_ENV === 'production'
    ? transport({
        target: 'pino-pretty',
        options: {
          minimumLevel: level,
          translateTime: 'yyyy-mm-dd HH:MM:ss.l',
          destination: 1, // use 2 for stderr
          colorize: true,
        },
      })
    : destination(1)

let logger: Logger

export const getLogger = (label: string): LoggerWithTimer => {
  if (!logger) logger = pino({ level }, config)

  const l = logger.child({
    label,
  }) as LoggerWithTimer

  l.debug("I'm alive")

  l.startTimer = () => {
    const startTime = new Date()
    return {
      done: (logObj) => {
        const { level = 'info', ...restLogObj } = logObj
        const duration_ms = differenceInMilliseconds(new Date(), startTime)
        const finalLogObj =
          typeof logObj === 'string' ? { message: logObj } : restLogObj
        logger[level]({ ...finalLogObj, duration_ms })
      },
    }
  }

  return l
}
