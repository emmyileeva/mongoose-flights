const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// POST /flights/:id/tickets
router.post('/flights/:id/tickets', ticketsCtrl.create);
//GET /flights/:id/tickets/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

module.exports = router;

