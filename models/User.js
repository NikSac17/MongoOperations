const mongoose = require("mongoose");
const {Schema} = mongoose; 

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user',UserSchema);