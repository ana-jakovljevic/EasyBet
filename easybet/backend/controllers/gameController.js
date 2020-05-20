const mongoose = require('mongoose');
const Football = require('../models/footballModel');
const Basketball = require('../models/basketballModel');
const Tennis = require('../models/tennisModel');

module.exports.getFootballMatches = async(req, res, next) => {
    try{
        var leagues = req.query.leagues;
        if (leagues.length === 0) {
            var footballMatches = await Football.find({}).exec();
        } else {
            leagues = leagues.split(',');
            var footballMatches = await Football.find({league: {$in: leagues}}).exec();
        }

        res.status(200).json(footballMatches);
    } catch(err){
        next(err);
    }
};

module.exports.getFootballLeagues = async(req,res,next) => {
    try{
        let leagues = [];
        (await Football.distinct('league')).forEach((league) =>{
            leagues.push({'league': league});
        });
        res.status(200).json(leagues);
    } catch(err){
        next(err);
    }
}

module.exports.getBasketballMatches = async(req,res, next) => {
    try{
        const basketballMatches = await Basketball.find({}).exec();
        res.status(200).json(basketballMatches);
    } catch(err){
        next(err);
    }
};

module.exports.getTennisMatches = async(req,res, next) => {
    try{
        const tennisMatches = await Tennis.find({}).exec();
        res.status(200).json(tennisMatches);
    } catch(err){
        next(err);
    }
};

