const express = require('express');
const activitiesRoutes = require('./routes/activitiesRoutes');
const signupRoutes = require('./routes/signupRoutes');

const app = express();

app.use(express.json());
app.use('/signup', signupRoutes);
app.use('/activities', activitiesRoutes);

module.exports = app;