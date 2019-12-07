import mongoose from 'mongoose';
import validator from 'email-validator';

const Schema = mongoose.Schema;
const UserSchema = new Schema({

username:{
    type: String,
    required: true,
    trim: true
},
email:{
    type: String,
    required: true,
    unique: true,
    validate: value => {
        if (!validator.validate(value)){
            throw new Error({ error: 'Please enter a valid email address' });
        }
    }
},
password:{
    type: String,
    required: true
},
role:{
    type: String,
    required: true
}
});

export default mongoose.model('users', UserSchema);