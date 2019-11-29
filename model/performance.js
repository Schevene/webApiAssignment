import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const PerformanceSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    artist:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    stageId:{
        type: Number,
        required: true   
    }
});

export default mongoose.model('performances', PerformanceSchema);