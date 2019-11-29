import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
const typeDefs = `
  type Artist {
    _id: ID!
    name: String!
    genre: String 
    displayPic: String
    about: String
    twitter: String
  }
  type Stage{
    stageName: String!
    capacity: Int!
    accessibility: String!
    parking: String
    description: String
  }
  type Performance{
    title: String!
    artist: String!
    description: String!
    date: Date!
    stageId: Int!
  }
  type User{
    username: String!
    email: String!
    password: String!
    salt: String!
    hash: String!
  }

  scalar Date
  
  type Query {
    getArtist(_id: ID!): Artist
    allArtists: [Artist]
    getStage(_id: ID!): Stage
    allStages: [Stage]
    getPerformance(_id: ID!): Performance
    allPerformances: [Performance]
    getUser(_id: ID!): User
    allUsers: [User]
  }
 
  input ArtistInput {
    name: String!
    genre: String
    displayPic: String
    about: String
    twitter: String
  }
  input ArtistUpdateInput {
    name: String!
    genre: String
    displayPic: String
    about: String
    twitter: String
  }

  input StageInput {
    stageName: String!
    capacity: Int!
    accessibility: String!
    parking: String
    description: String
  }
  input StageUpdateInput {
    stageName: String!
    capacity: Int!
    accessibility: String!
    parking: String
    description: String
  }

  input PerformanceInput {
    title: String!
    artist: String!
    description: String!
    date: Date!
    stageId: Int!
  }
  input PerformanceUpdateInpute{
    title: String!
    artist: String!
    description: String!
    date: Date!
    stageId: Int!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
    salt: String!
    hash: String!
    role: String!
  }
  input UserUpdateInput {
    username: String!
    email: String!
    password: String!
    salt: String!
    hash: String!
    role: String!
  }


  type Mutation {
    createArtist(input: ArtistInput) : Artist
    updateArtist(_id: ID!, input: ArtistUpdateInput): Artist
    deleteArtist(_id: ID!): Artist
    createStage(input: StageInput) : Stage
    updateStage(_id: ID!, input: StageUpdateInput): Stage
    deleteStage(_id: ID!): Stage
    createPerformance(input: StageInput) : Stage
    updatePerformance(_id: ID!, input: StageUpdateInput): Stage
    deletePerformance(_id: ID!): Stage
    createUser(input: UserInput) : User
    updateUser(_id: ID!, input: UserUpdateInput): User
    deleteUser(_id: ID!): User
  }
`


const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;