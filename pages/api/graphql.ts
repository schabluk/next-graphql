import { ApolloServer } from 'apollo-server-micro'

import { datasources, resolvers, typeDefs } from '../../apollo'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    some: new datasources.SomeAPI({}),
  }),
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
