var express = require('express');
var router = express.Router();

const flightsCtrl = require("../controllers/flights");

//  GET/ flights/ new 
router.get("/new", flightsCtrl.new);
// GET/ flights
router.get("/", flightsCtrl.index);
// POST/ movies
router.post('/', flightsCtrl.create);

module.exports = router;
