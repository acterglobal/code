import { handleLogout } from './AuthUtils'

exports.handler = async (_event, _context) => {
  try {
    return handleLogout()
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
