const express = require("express");
const router = express.Router();

const {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");

// GET All Movies
router.get("/", getMovies);

// GET Single Movie
router.get("/:id", getMovie);

// POST Movie
router.post("/", createMovie);

// PUT Movie
router.put("/:id", updateMovie);

// DELETE Movie
router.delete("/:id", deleteMovie);

module.exports = router;