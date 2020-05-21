const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true
    },
    matches: {
        type: Array,
        required: true
    }

});

const ticketModel = mongoose.model('tickets', ticketSchema,"tickets");
module.exports = ticketModel;