  import Artist from './model/artist';
  import Stage from './model/stage';
  import Performance from './model/performance';
  import User from './model/user';

export const resolvers = {
  
  //Read functions, do not involve mutations
  Query: {
    async getArtist(root, {_id}){
      return await Artist.findById(_id);
    },
    async allArtists() {
      return await Artist.find();
    },
    async getStage(root, {_id}){
      return await Stage.findById(_id);
    },
    async allStages() {
      return await Stage.find();
    },
    async getPerformance(root, {_id}){
      return await Performance.findById(_id);
    },
    async allPerformances() {
      return await Performance.find();
    },
    async getUser(root, {_id}){
      return await User.findById(_id);
    },
    async allUsers() {
      return await User.find();
    }
  },

  //CUD functions, that involve mutations
  Mutation: {
    async createArtist(root, { input }) {
      return await Artist.create(input);
    },
    async updateArtist(root, {_id, input}){
      return await Artist.findByIdAndUpdate(_id, input)
    },
    async deleteArtist(root, {_id}){
      return await Artist.findByIdAndRemove(_id);
    },
    async createStage(root, { input }) {
      return await Stage.create(input);
    },
    async updateStage(root, {_id, input}){
      return await Stage.findByIdAndUpdate(_id, input)
    },
    async deleteStage(root, {_id}){
      return await Stage.findByIdAndRemove(_id);
    },
    async createPerformance(root, { input }) {
      return await Performance.create(input);
    },
    async updatePerformance(root, {_id, input}){
      return await Performance.findByIdAndUpdate(_id, input)
    },
    async deletePerformance(root, {_id}){
      return await Performance.findByIdAndRemove(_id);
    },
    async createUser(root, { input }) {
      return await User.create(input);
    },
    async updateUser(root, {_id, input}){
      return await User.findByIdAndUpdate(_id, input)
    },
    async deleteUser(root, {_id}){
      return await User.findByIdAndRemove(_id);
    }
  }
};