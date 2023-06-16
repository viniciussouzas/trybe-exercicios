const express = require('express');

const { authValidationSignup, generateToken} = require('../middlewares/authValidation');

const router = express.Router();

router.post('/', authValidationSignup, (req, res) => {
  const randomToken = generateToken();
  res.status(200).json( { token: randomToken});
});

module.exports = router;