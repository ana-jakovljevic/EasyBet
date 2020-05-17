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
    oddX: {
        type: Number | String
    },
    odd2: {
        type: Number | String
    },
    odd1X: {
        type: Number | String
    },
    odd12: {
        type: Number | String
    },
    oddX2: {
        type: Number | String
    },
    odd0to2: {
        type: Number | String
    },
    odd3plus: {
        type: Number | String
    },
    odd4plus: {
        type: Number | String
    }
});

const footballModel = mongoose.model('FootballMatches', matchSchema, "FootballMatches");
module.exports = footballModel;