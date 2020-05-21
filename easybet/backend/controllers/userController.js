const mongoose = require('mongoose');
const User = require('../models/userModel');

module.exports.registerUser = async(req,res,next) => {
    let foundUsername = await User.find({username: req.body.username}).exec();
    let foundEmail = await User.find({email: req.body.email}).exec();    
    let message = "";
    
    if(foundUsername.length){
        message = "Username already in use";
    } else if(foundEmail.length){
        message = "Email already in use";
    } else {
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        await user.save();
    }

    try {
        res.status(200).json({message});
    } catch (err) {
        next(err);
    }
}
