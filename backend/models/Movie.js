const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    genre: {
      type: String,
      required: true,
    },

    releaseDate: {
      type: Date,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },

    poster: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movie", movieSchema);