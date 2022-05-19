import { differenceInMilliseconds } from 'date-fns'
import pino, {
  multistream,
  transport,
  Level,
  Logger,
  LogFn,
  destination,
} from 'pino'
import { createWriteStream } from 'pino-http-send'

const level: Level = (process.env.NEXT_PUBLIC_LOG_LEVEL as Level) || 'info'

interface LoggerWithTimer extends Logger {
  startTimer: () => { done: LogFn }
}

const config =
  process.env.NODE_ENV !== 'production'
    ? transport({
        target: 'pino-pretty',
        options: {
          minimumLevel: level,
          translateTime: 'yyyy-mm-dd HH:MM:ss.l',
          destination: 1, // use 2 for stderr
          colorize: true,
        },
      })
    : multistream([
        { level, stream: destination(1) },
        ...(process.env.AXIOM_INGEST_URL && process.env.AXIOM_API_TOKEN
          ? [
              {
                level,
                stream: createWriteStream({
                  url: process.env.AXIOM_INGEST_URL,
                  headers: {
                    Authorization: `Bearer ${process.env.AXIOM_API_TOKEN}`,
                    'Content-Type': 'application/x-ndjson',
                    'x-axiom-org-id': 'acter-25g8',
                  },
                  bodyType: 'ndjson',
                }),
              },
            ]
          : []),
      ])

let logger: Logger

export const getLogger = (label: string): LoggerWithTimer => {
  if (!logger)
    logger = pino(
      { level, formatters: { level: (level) => ({ level }) } },
      config
    )

  const l = logger.child({
    label,
  }) as LoggerWithTimer

  l.startTimer = () => {
    const startTime = new Date()
    return {
      done: (logObj) => {
        const { level = 'info', ...restLogObj } = logObj
        const duration_ms = differenceInMilliseconds(new Date(), startTime)
        const finalLogObj =
          typeof logObj === 'string' ? { msg: logObj } : restLogObj
        l[level]({ ...finalLogObj, duration_ms })
      },
    }
  }

  return l
}
