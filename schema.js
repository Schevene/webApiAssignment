import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
const typeDefs = `
  type Artist {
    _id: ID!
    title: String!
    date: Date
    content: String!
  }
  
  scalar Date
  type Query {
    getArtist(_id: ID!): Artist
    allArtists: [Artist]
  }
  input ArtistInput {
    title: String!
    content: String!
  }
  input ArtistUpdateInput {
    title: String
    content: String
  }
  type Mutation {
    createArtist(input: ArtistInput) : Artist
    updateArtist(_id: ID!, input: ArtistUpdateInput): Artist
    deleteArtist(_id: ID!): Artist
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;