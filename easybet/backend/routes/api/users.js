const express = require('express');
const router = express.Router();
const controller = require('../../controllers/userController');

router.post('/register', controller.registerUser);
router.post('/login', controller.logInUser);

router.post('/changePassword', controller.changePassword);

router.get('/userInfo', controller.getUser);

module.exports = router;