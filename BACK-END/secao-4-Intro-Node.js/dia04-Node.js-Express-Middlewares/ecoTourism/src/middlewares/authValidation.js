const crypto = require('crypto');

const generateToken = () => crypto.randomBytes(8).toString('hex');

const authValidationSignup = (req, res, next) => {
  const { email, password, firstName, phone } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'O campo email é obrigatório'}); 
  }

  if (!password) {
    return res.status(400).json({ message: 'O campo password é obrigatório'}); 
  }

  if (!firstName) {
    return res.status(400).json({ message: 'O campo firstName é obrigatório'}); 
  }

  if (!phone) {
    return res.status(400).json({ message: 'O campo phone é obrigatório'}); 
  }

  next();
}

const authValidationToken = (req, res, next) => {
  const { authorization } = req.headers;

  if ( !authorization || authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!'}); 
  }

  next();
};

module.exports = {
  authValidationSignup,
  authValidationToken,
  generateToken 
};