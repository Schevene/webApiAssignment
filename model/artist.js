import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ArtistSchema = new Schema({
  name : {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  displayPic : {
    type: { data: Buffer, contentType: String },
    required: false
    //default: [our logo when it is made]
  },
  about : {
    type: String,
    required: true
  },
  twitter : {
    type: String,
    required: false
  },
  performanceDate : {
    type: Date,
    required: false
  }
});

export default mongoose.model('artist', ArtistSchema);