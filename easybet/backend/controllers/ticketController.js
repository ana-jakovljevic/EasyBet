const mongoose = require('mongoose');
const Ticket = require('../models/ticketModel');
const { spawn } = require('child_process');

module.exports.saveTicket = async(req,res,next) => {
    try {
        const ticket = new Ticket({
            _id: new mongoose.Types.ObjectId(),
            username: req.body.username,
            matches: req.body.matches
        });
        await ticket.save();

        res.status(200);
        res.end();
    } catch(err){
        next(err);
    } 
};

module.exports.getTicketsByUsername = async(req,res,next) => {
    try{
        const username = req.params.username;
        const tickets = await Ticket.find({username: username}).exec();

        res.status(200).json(tickets);
    } catch(err) {
        next(err);
    }
};

module.exports.generateTicket = async(req,res,next) =>  {
    try{
        const quota = req.query.quota;
        const sport = req.query.sport;
        const leagues = req.query.leagues;
        const limit = req.query.limit;
    
        let generator = spawn('python3',["generator.py", quota, sport, leagues, limit]);
        generator.stdout.on('data',(data) => {   
            let finalData = [];
            let dataString = data.toString();
            dataString = dataString.substring(0,dataString.length-1);
            dataString = dataString.replace(/\'/g, '\"');
            dataString.split("\n").forEach(x => {
                finalData.push(JSON.parse(x));
            });
            res.status(200).json(finalData);
        });
        generator.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });
    } catch(err) {
        next(err);
    }
};

module.exports.deleteTicket = async (req, res, next) => {

    try {
        let value = await Ticket.deleteOne({_id: req.params.id}).exec();
        if (value) {
            res.status(200).json({message: "deleted ticket"});
        }
        else {
            res.status(400).json({message: "ticket couldn't be deleted"});
        }
    } catch (error) {
        next(error);
    }

};