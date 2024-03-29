const express = require('express');
const router = express.Router();
const controller = require('../../controllers/ticketController');

router.get('/history/:username',controller.getTicketsByUsername);
router.post('/', controller.saveTicket);
router.get('/makeMeRich', controller.generateTicket);
router.delete('/history/:username/:id', controller.deleteTicket);

module.exports = router;