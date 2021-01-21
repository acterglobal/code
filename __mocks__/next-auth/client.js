const client = jest.createMockFromModule('next-auth/client')

let mockSession = {
  user: null,
  expires: '',
}
let loading = false

client.__setLoading = function (isLoading) {
  loading = isLoading
}

client.__setMockSession = function (newSession) {
  mockSession = newSession
}

client.getSession = function () {
  return mockSession
}

client.useSession = function () {
  return [mockSession, loading]
}

client.signIn = function () {
  return Promise.resolve()
}

client.signOut = function signOut() {
  return Promise.resolve()
}

module.exports = client
