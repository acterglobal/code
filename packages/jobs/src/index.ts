import throng from 'throng'
import { notificationWorker } from './workers/notification-worker'

const start = async () => {
  await notificationWorker.getNextJob('foo')
}

throng({ start })
