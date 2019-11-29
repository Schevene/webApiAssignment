import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const StageSchema = new Schema({
    stageName:{
        type: String,
        required: true
    },
    capacity:{
        type: Number,
        required: true
    },
    accessibility:{
        type: String,
        required: true
    },
    parking:{
        type: String,
        required: false
    },
    description:{
        type: String,
        required: true   
    }
});

export default mongoose.model('stages', StageSchema);