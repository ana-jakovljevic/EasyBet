const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
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
    odds: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        type: [Number]
    }
});

const tennisModel = mongoose.model('TennisMatches', matchSchema,"TennisMatches");
module.exports = tennisModel;