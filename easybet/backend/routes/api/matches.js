const express = require('express');
const router = express.Router();
const controller = require('../../controllers/gameController')

router.get('/football', controller.getFootballMatches);
router.get('/basketball', controller.getBasketballMatches);
router.get('/tennis', controller.getTennisMatches);

module.exports = router;