import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
const typeDefs = `
  type Artist {
    _id: ID!
    name: String!
    genre: String!
    displayPic: String!
    about: String!
    twitter: String!
    performanceDate: Date
  }
  
  scalar Date
  type Query {
    getArtist(_id: ID!): Artist
    allArtists: [Artist]
  }
  input ArtistInput {
    name: String!
    genre: String!
    about: String!
  }
  input ArtistUpdateInput {
    name: String
    genre: String
    about: String
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