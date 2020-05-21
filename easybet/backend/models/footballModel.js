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
    odd1: Number | String,
    oddX: Number | String,
    odd2: Number | String,
    odd1X: Number | String,
    odd12: Number | String,
    oddX2: Number | String,
    odd0to2: Number | String,
    odd3plus: Number | String,
    odd4plus: Number | String
});

const footballModel = mongoose.model('footballMatches', matchSchema, "footballMatches");
module.exports = footballModel;