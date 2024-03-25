const express = require('express');
const router = express.Router();

const detailsCtrl = require("../controllers/details");
router.post('/flights/:id/details', detailsCtrl.create);

module.exports = router;