const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const detailsSchema = new Schema(
  {
    airport: {
      type: String,
      enum: ["SFO", "LAX", "JFK", "MIA", "SJC"],
      required: true,
    },
    arrivalDateTime: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ["Delta", "Southwest", "Jetblue"],
      required: true,
    },
    airport: {
      type: String,
      enum: ["SFO", "LAX", "JFK", "MIA", "SJC"],
      default: "LAX",
    },
    flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999,
    },
    departs: {
      type: Date,
      required: true,
      default: () => {
        //calculate default value one year from the date created
        const yearLater = new Date();
        yearLater.setFullYear(yearLater.getFullYear() + 1);
        return yearLater;
      },
    },
    // embedding destinationSchema as subdocuments
    details: [detailsSchema]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flight", flightSchema);
