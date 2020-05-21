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
    odd2: Number | String,
    oddFirstSet1: Number | String,
    oddFirstSet2: Number | String,
    oddHen1: Number | String,
    oddHen2: Number | String
});

const tennisModel = mongoose.model('tennisMatches', matchSchema,"tennisMatches");
module.exports = tennisModel;