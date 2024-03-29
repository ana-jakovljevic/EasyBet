const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    tickets: {
        type: {}
    },
    date: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model('users', userSchema, "users");
module.exports = userModel;