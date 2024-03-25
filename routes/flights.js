var express = require('express');
var router = express.Router();

const flightsCtrl = require("../controllers/flights");

//  GET/ flights/ new 
router.get("/new", flightsCtrl.new);
// GET/ flights
router.get("/", flightsCtrl.index);
// GET /flights/:id (show functionality) MUST be below new route
router.get('/:id', flightsCtrl.show);
// POST/ movies
router.post('/', flightsCtrl.create);

module.exports = router;
