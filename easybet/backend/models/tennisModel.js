const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    league: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true  
    },
    homeTeam: {
        type: String,
        required: true
    },
    guestTeam: {
        type: String,
        required: true
    },
    odd1: {
        type: Number | String
    },
    odd2: {
        type: Number | String
    },
    oddFirstSet1: {
        type: Number | String
    },
    oddFirstSet2: {
        type: Number | String
    },
    oddHen1: {
        type: Number | String
    },
    oddHen2: {
        type: Number | String
    }
});

const tennisModel = mongoose.model('TennisMatches', matchSchema,"TennisMatches");
module.exports = tennisModel;