import mongoose from 'mongoose';
import validator from 'email-validator';
import pstorage from 'node-password-storage';

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
    required: true,
    minlength: 9
},
salt:{
    type: String,
    required: true
},
hash:{
    type: String,
    required: true
},
role:{
    type: String,
    required: true
}
});

export default mongoose.model('users', UserSchema);