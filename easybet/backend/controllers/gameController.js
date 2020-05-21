const mongoose = require('mongoose');
const Football = require('../models/footballModel');
const Basketball = require('../models/basketballModel');
const Tennis = require('../models/tennisModel');

module.exports.getFootballMatches = async(req, res, next) => {
    try{
        let query = req.query;
        let footballMatches;

        if(!Object.keys(req.query).length){
            footballMatches = await Football.find({}).exec();
        } else if(!query.leagues){
            footballMatches = await Football.find({}).exec();
        } else {
            leagues = query.leagues.split(',');
            footballMatches = await Football.find({league: {$in: leagues}}).exec();
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
        let query = req.query;
        let basketballMatches;

        if(!Object.keys(req.query).length){
            basketballMatches = await Basketball.find({}).exec();
        } else if(!query.leagues){
            basketballMatches = await Basketball.find({}).exec();
        } else {
            leagues = query.leagues.split(',');
            basketballMatches = await Basketball.find({league: {$in: leagues}}).exec();
        }

        res.status(200).json(basketballMatches);
    } catch(err){
        next(err);
    }
};

module.exports.getBasketballLeagues = async(req,res,next) => {
    try{
        let leagues = [];
        (await Basketball.distinct('league')).forEach((league) =>{
            leagues.push({'league': league});
        });
        res.status(200).json(leagues);
    } catch(err){
        next(err);
    }
}

module.exports.getTennisMatches = async(req,res, next) => {
    try{
        let query = req.query;
        let tennisMatches;

        if(!Object.keys(req.query).length){
            tennisMatches = await Tennis.find({}).exec();
        } else if(!query.leagues){
            tennisMatches = await Tennis.find({}).exec();
        } else {
            leagues = query.leagues.split(',');
            tennisMatches = await Tennis.find({league: {$in: leagues}}).exec();
        }

        res.status(200).json(tennisMatches);
    } catch(err){
        next(err);
    }
};

module.exports.getTennisLeagues = async(req,res,next) => {
    try{    
        let leagues = [];
        (await Tennis.distinct('league')).forEach((league) =>{
            leagues.push({'league': league});
        });
        res.status(200).json(leagues);
    } catch(err){
        next(err);
    }
};

