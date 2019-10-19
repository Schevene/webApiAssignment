import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ArtistSchema = new Schema({
  name : {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: false//Change back to true later
  },
  displayPic : {
    type: { data: Buffer, contentType: String },
    required: false
    //default: [our logo when it is made]
  },
  about : {
    type: String,
    required: false //change back to ture later
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

export default mongoose.model('artists', ArtistSchema);