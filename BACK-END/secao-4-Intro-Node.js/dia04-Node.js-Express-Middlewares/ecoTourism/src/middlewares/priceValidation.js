const priceValidation = (req, res, next) => {
  const { price } = req.body;

  if(!price || price < 0 || typeof price !== 'number') {
  return res.status(400).json({ message: 'O campo price é obrigatório, e deve ser um número maior ou igual a zero'}); 
  }

  next();
}

module.exports = priceValidation;