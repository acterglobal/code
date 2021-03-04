const apollo = jest.createMockFromModule('src/lib/apollo')

let mockApolloQueryResponse = {}

apollo.__setApolloQueryResponse = function (res) {
  mockApolloQueryResponse = res
}
apollo.initializeApollo = function () {
  return {
    query: function () {
      return Promise.resolve(mockApolloQueryResponse)
    },
  }
}
apollo.addApolloState = function (client, props) {
  return props
}

module.exports = apollo
