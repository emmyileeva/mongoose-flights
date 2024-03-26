const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

const newTicket = async (req, res) => {
    try {
        // get the flight id from the request params
        const flight = await Flight.findById(req.params.id);
        // create an in-memory ticket with default values
        const newTicket = new Ticket();
        // render the form and pass to the view
        res.render('tickets/new', { flight, newTicket });
    } catch (err) {
        // handle errors
        console.error(err);
    }
};

const create = async (req, res) => {
    try {
        // destructure properties from req.body
        const { seat, price } = req.body;
        // find the flight by id
        const flight = await Flight.findById(req.params.id);
        // create new ticket object
        const ticket = new Ticket({
            seat,
            price,
            flight: flight._id,
        });
        // save the new ticket to the database
        await ticket.save();
        // redirect to the flight show page
        res.redirect(`/flights/${flight._id}`);
    } catch (err) {
        // handle errors
        console.error(err);
    }
};

module.exports = {
    new: newTicket,
    create
};