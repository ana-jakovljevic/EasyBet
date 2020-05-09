const mongoose = require('mongoose');
const Football = require('../models/footballModel');
const Basketball = require('../models/basketballModel');
const Tennis = require('../models/tennisModel');


module.exports.getFootballMatches = async(req,res, next) => {
    try{
        const footballMatches = await Football.find({},{_id: 0}).exec();
        res.status(200).json(footballMatches);
    } catch(err){
        next(err);
    }
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

