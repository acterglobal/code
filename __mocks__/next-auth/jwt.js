const jwt = jest.createMockFromModule('next-auth/jwt')

let mockToken = {}

jwt.__setMockToken = function(newMockToken) {
  mockToken = newMockToken
}

jwt.getToken = function () {
  return mockToken
}

module.exports = jwt