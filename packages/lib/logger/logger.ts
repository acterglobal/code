import { differenceInMilliseconds } from 'date-fns'
import pino, {
  multistream,
  transport,
  DestinationStream,
  Logger,
  LogFn,
  StreamEntry,
} from 'pino'
import { createWriteStream } from 'pino-http-send'

interface LoggerWithTimer extends Logger {
  startTimer: () => { done: LogFn }
}

const transports: Record<string, DestinationStream | StreamEntry> = {
  [process.env.NODE_ENV === 'production' ? '' : 'dev']: transport({
    target: 'pino-pretty',
    options: {
      destination: 1, // use 2 for stderr
      colorize: true,
    },
  }),
  [process.env.AXIOS_API_TOKEN]: createWriteStream({
    url: 'https://cloud.axiom.co/api/v1/datasets/dev/ingest',
    bodyType: 'ndjson',
    headers: {
      Authorization: `Bearer ${process.env.AXIOS_API_TOKEN}`,
      'Content-Type': 'application/x-ndjson',
      'x-axiom-org-id': 'acter-25g8',
    },
  }),
}
const streams = Object.keys(transports).reduce((memo, k) => {
  if (!k) return memo
  return [...memo, transports[k]]
}, [])

const level = process.env.NEXT_PUBLIC_LOG_LEVEL || 'info'
const logger = pino({ level }, multistream(streams))

export const getLogger = (label: string): LoggerWithTimer => {
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
        logger[level]({ ...finalLogObj, duration_ms })
      },
    }
  }

  return l
}
