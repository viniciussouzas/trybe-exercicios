
const nameValidation = (req, res, next) => {
  const { name } = req.body;

  if(!name || name.length < 4) {
  return res.status(400).json({ message: 'O campo name é obrigatório, e deve ter pelo menos 4 caracteres'}); 
  }

  next();
}

module.exports = nameValidation;