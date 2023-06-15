const express = require('express');
require('express-async-errors');

const { validateTeam } = require('./middlewares/validateTeam');
const { existingId } = require('./middlewares/existingId');
const apiCredentials = require('./middlewares/apiCredentials');

const { teams } = require('./utils/teams');

const app = express();

let nextId = 3;

app.use(express.json());
app.use(apiCredentials);

app.get('/teams', (req, res) => res.status(200).json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);

  res.status(200).json(team);
});

// Arranja os middlewares para chamar validateTeam primeiro
app.post('/teams', validateTeam, (req, res) => {
  if (!req.teams.teams.includes(req.body.sigla) && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla'});
  }

  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const indexOfTeam = teams.findIndex(t => t.id === id);

  const updated = { id, ...req.body };
  teams.splice(indexOfTeam, 1, updated);
  res.status(201).json(updated);
});

module.exports = app;