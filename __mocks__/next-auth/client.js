const client = jest.createMockFromModule('next-auth/client')

let mockSession = {
  user: null,
  expires: '',
}
let loading = false
let signOutFn = () => Promise.resolve()

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

client.__setMockSignOut = function (mockSignOut) {
  client.signOut = mockSignOut
}

client.signOut = function signOut() {
  return signOutFn
}

module.exports = client
