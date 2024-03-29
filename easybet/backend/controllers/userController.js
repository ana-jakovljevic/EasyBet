const mongoose = require('mongoose');
const User = require('../models/userModel');
const months = require('../models/monthNameModel');

module.exports.registerUser = async (req, res, next) => {
    let foundUsername = await User.find({ username: req.body.username }).exec();
    let foundEmail = await User.find({ email: req.body.email }).exec();
    let message = "";

    if (foundUsername.length) {
        message = "Username already in use";
    } else if (foundEmail.length) {
        message = "Email already in use";
    } else {
        const d = new Date();
        const birth = new Date(req.body.birthDate);
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            date: d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear(),
            birthDate: birth.getDate() + ' ' + months[birth.getMonth()] + ' ' + birth.getFullYear()
        });
        await user.save();
    }

    try {
        res.status(200).json({ message });
    } catch (err) {
        next(err);
    }
};

module.exports.logInUser = async (req, res, next) => {
    let user = await User.find({ username: req.body.username }).exec();
    let message = "";
    let username = "";

    if (!user.length) {
        message = "Username doesn't exist";
    } else {
        password = user[0].password;
        if (password === req.body.password) {
            username = user[0].username;
        } else {
            message = "Password is not correct";
        }
    }

    try {
        res.status(200).json({ username, message });
    } catch (err) {
        next(err);
    }
};

module.exports.changePassword = async (req, res, next) => {
    try {
        let message = "";
        let ok = false;
        let user = await User.find({ username: req.body.username }).exec();
        let currentPassword = req.body.currentPassword;
        let newPassword = req.body.newPassword;
        if (user.length) {
            if (currentPassword != user[0].password) {
                message = "Incorrect password";
            } else {
                user[0].password = newPassword;
                await user[0].save();
                //User.updateOne({ username: req.body.username }, { $set: { password: newPassword } });
                message = "Password changed";
                ok = true;
            }
        } else {
            message = "Incorrect username";
        }
        res.status(200).json({ message, ok });
    } catch (err) {
        next(err);
    }
};

module.exports.getUser = async (req, res, next) => {
    try {
        const user = await User.find({ username: req.query.username }).exec();
        if (user.length) {
            res.status(200);
            res.json(user[0]);
        } else {
            res.status(404);
            res.send();
        }
    } catch (err) {
        next(err);
    }
};