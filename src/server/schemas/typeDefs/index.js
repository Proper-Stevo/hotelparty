// graphql/schema.js
import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Query {
    getAllItems: [Item]
  }

  type Item {
    id: ID
    name: String
    description: String
  }
`;
