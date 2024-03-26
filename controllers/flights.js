const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

// renders the view for adding a new flight
const newFlight = (req, res) => {
  try {
    // create an in-memory flight with default values
    const newFlight = new Flight();
    // render the form and pass to the view
    res.render("flights/new", { errorMsg: "", newFlight });
  } catch (err) {
    // handle errors
    console.log(err);
  }
};

// gets all flights from db and renders the view for displaying all the flights
const index = async (req, res) => {
  try {
    // get all flights from db and sort by departure date in ascending order
    const flights = await Flight.find({}).sort({ departs: 1 });
    // render the flights data
    res.render("flights/index", { flights });
  } catch (err) {
    // handle errors
    console.error(err);
  }
};
// renders the view to show details of a single flight 
const show = async (req, res) => {
  try {
    // get the flight id from the request params
    const flight = await Flight.findById(req.params.id);
    // get all tickets associated with the flight
    const tickets = await Ticket.find({ flight: flight._id });
    // render the flight data
    res.render("flights/show", { flight, tickets });
  } catch (err) {
    // handle errors
    console.error(err);
  }
};

const create = async (req, res) => {
  try {
    // destructure properties from req.body
    const { airline, airport, flightNo, departs } = req.body;
    // create new flight object
    const flight = new Flight({
      airline,
      airport,
      flightNo,
      departs,
    });
    // Save the new flight to the database
    await flight.save();
    // redirect to flights index page
    res.redirect("/flights");
  } catch (err) {
    // handle errors
    console.log(err);
    res.render("flights/new", { errorMsg: err.message });
  }
};

module.exports = {
  new: newFlight,
  index,
  show,
  create,
};
