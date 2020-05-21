const mongoose = require('mongoose');
const Ticket = require('../models/ticketModel');

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
}