  import Artist from './model/artist';

export const resolvers = {
  Query: {
    async getArtist(root, {_id}){
      return await Artist.findById(_id);
    },
    async allArtists() {
      return await Artist.find();
    }
  },
  Mutation: {
    async createArtist(root, { input }) {
      return await Artist.create(input);
    },
    async updateArtist(root, {_id, input}){
      return await Artist.findByIdAndUpdate(_id, input)
    },
    async deleteArtist(root, {_id}){
      return await Artist.findByIdAndRemove(_id);
    }
  }
};