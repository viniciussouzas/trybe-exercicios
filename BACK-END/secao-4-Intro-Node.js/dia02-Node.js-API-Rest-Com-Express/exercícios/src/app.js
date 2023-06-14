const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const { readFileData } = require('./utilsFs');

const moviesPath = path.resolve(__dirname, './movies.json');

const app = express();

app.use(express.json());

app.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const moviesList = await readFileData();

    const resultFind = moviesList.find((movie) => movie.id === Number(id));

    if (!resultFind) {
      res.status(404).json({ message: 'Movie id not found'});
    }

    res.status(200).json({ resultFind });
  } catch (error) {
    res.status(500).send({ message: error.message});
  }
});

app.get('/movies', async (req, res) => {
  try {
    const moviesList = await readFileData();

    res.status(200).json({ moviesList });
  } catch (error) {
    res.status(500).send({ message: error.message});
  }
});

app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;

    const moviesList = await readFileData();

    const newMovie = {
      id: moviesList[moviesList.length - 1].id + 1,
      movie,
      price,
    };

    const newMoviesList = JSON.stringify([...moviesList, newMovie]);

    await fs.writeFile(moviesPath, newMoviesList);
    res.status(201).json({ newMoviesList });
  } catch (error) {
    res.status(500).send({ message: error.message});
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;

    const moviesList = await readFileData();

    const indexMovie = moviesList.findIndex((movie) => movie.id === Number(id));

    if (!indexMovie) {
      res.status(404).json({ message: 'Movie id not found'});
    }

    moviesList[indexMovie] = { id: Number(id), movie, price };

    const updatedMovies = JSON.stringify(moviesList);

    await fs.writeFile(moviesPath, updatedMovies);

    res.status(200).json({ updatedMovies });
  } catch (error) {
    res.status(500).send({ message: error.message});
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const moviesList = await readFileData();

    const findIndex = moviesList.findIndex((movie) => movie.id === Number(id));

    const updatedMoviesList = JSON.stringify(moviesList.splice(findIndex, 1));

    await fs.writeFile(moviesPath, updatedMoviesList);

    res.status(204).end();
  } catch (error) {
    res.status(500).send({ message: error.message});
  }
});

module.exports = app;