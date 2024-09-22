const { response } = require("express");
const Movie = require("../models/Movie");

const getAllMovies = async (req, res, next) => {
  try {
    const response = await Movie.find();
  } catch (err) {
    return console.log(err);
  }
  if (!response) {
    return res.status(500).json({ message: "Request Failed" });
  }
  return res.status(200).json({ response });
};

const getAllMoviesById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const response = await Movie.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!response) {
    return res.status(500).json({ message: "Request Failed" });
  }
  return res.status(200).json({ response });
};

const addMovie = async (req, res, next) => {
  const { title, description, releaseDate, posterUrl, featured, actors } =
    req.body;

  if (
    !title &&
    title.trim === "" &&
    !description &&
    description.trim === "" &&
    !releaseDate &&
    releaseDate.trim === "" &&
    !posterUrl &&
    posterUrl.trim === "" &&
    !featured &&
    featured.trim === "" &&
    !actors &&
    actors.trim === ""
  ) {
    return res.status(402).json({ message: "Invalid Inputs" });
  }

  try {
    const response = new Movie({
      description,
      releaseDate: new Date(`${releaseDate}`),
      featured,
      actors,
      admin: adminId,
      posterUrl,
      title,
    });
  } catch (err) {
    return console.log(err);
  }

  if (!response) {
    return res.status(500).json({ message: "Request Failed" });
  }

  return res.status(201).json({ response });
};

module.exports = { getAllMovies, getAllMoviesById, addMovie };
