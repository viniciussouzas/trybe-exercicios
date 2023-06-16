const express = require('express');

const nameValidation = require('../middlewares/nameValidation');
const priceValidation = require('../middlewares/priceValidation');
const { descValidation, createdAtValidation, ratingValidation, difficultyValidation} = require('../middlewares/descValidation');
const { authValidationToken } = require('../middlewares/authValidation');

const router = express.Router();

router.post('/', authValidationToken, nameValidation, priceValidation, descValidation, createdAtValidation, ratingValidation, difficultyValidation, (req, res) => res.status(201).json({ message: 'Atividade cadastrada com sucesso!'}));

module.exports = router;