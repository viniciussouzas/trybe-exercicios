const express = require('express');
const { validateTeam } = require('./middlewares/validateTeam');
const { existingId } = require('./middlewares/existingId');
const { teams } = require('./utils/teams');

const app = express();

let nextId = 3;

app.use(express.json());

app.get('/teams', (req, res) => res.status(200).json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);

  res.status(200).json(team);
});

// Arranja os middlewares para chamar validateTeam primeiro
app.post('/teams', validateTeam, (req, res) => {
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