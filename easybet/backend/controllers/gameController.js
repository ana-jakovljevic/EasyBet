const mongoose = require('mongoose');
const Football = require('../models/footballModel');
const Basketball = require('../models/basketballModel');
const Tennis = require('../models/tennisModel');


module.exports.getFootballMatches = async(req,res, next) => {
    
    try{
        console.log('proslo 0');
        var leagues = req.query.leagues;
        console.log(leagues);
        if (leagues.length === 0) {
            var footballMatches = await Football.find({}, {_id: 0}).exec();
        } else {
            leagues = leagues.split(',');
            var footballMatches = await Football.find({league: {$in: leagues}}, {_id: 0}).exec();
        }

        console.log('proslo 2');
        res.status(200).json(footballMatches);
        console.log('proslo 3');
    } catch(err){
        next(err);
    }
    
    /*
    try{
        const basketballMatches = await Football.find({},{_id: 0}).exec();
        res.status(200).json(basketballMatches);
    } catch(err){
        next(err);
    }
    */
};

module.exports.getBasketballMatches = async(req,res, next) => {
    try{
        const basketballMatches = await Basketball.find({},{_id: 0}).exec();
        res.status(200).json(basketballMatches);
    } catch(err){
        next(err);
    }
};

module.exports.getTennisMatches = async(req,res, next) => {
    try{
        const tennisMatches = await Tennis.find({},{_id: 0}).exec();
        res.status(200).json(tennisMatches);
    } catch(err){
        next(err);
    }
};

module.exports.getChacketFootballLeaguesMatches = async(req, res, next) => {
    try {
        let chackedLeagues = req.params.chackedFootballLeagues;
        chackedLeagues = chackedLeagues.split(',');
        const footballMatches = await Football.find({league: {$or: chackedLeagues}}, {_id: 0}).exec();
        res.status(200).json(footballMatches);
    } catch(err) {
        next(err);
    }
};