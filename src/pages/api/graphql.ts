import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../../server/schemas/typeDefs';
import { resolvers } from '../../server/schemas/resolvers';

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}
