const Flight = require("../models/flight");

const create = async (req, res) => {
    const flight = await Flight.findById(req.params.id);
    flight.details.push(req.body);
    try {
        await flight.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flights/${flight._id}`);
};

module.exports = {
    create,
};