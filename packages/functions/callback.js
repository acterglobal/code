import { handleCallback } from './AuthUtils'

exports.handler = async (event, _context) => {
  try {
    return await handleCallback(event)
  } catch (err) {
    console.error(err)
    return {
      statusCode: 302,
      headers: {
        Location: '/',
        'Cache-Control': 'no-cache',
      },
    }
  }
}
