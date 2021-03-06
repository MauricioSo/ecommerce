const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 250
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 250
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        defauld: Date.now
    }
})


module.exports = mongoose.model('User', UserSchema); 