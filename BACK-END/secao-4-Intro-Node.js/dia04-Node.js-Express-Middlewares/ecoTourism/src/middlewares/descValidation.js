const descValidation = (req, res, next) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ message: 'O campo description é obrigatório'}); 
  }

  if (!description.createdAt) {
    return res.status(400).json({ message: 'O campo createdAt é obrigatório'}); 
  }

  if (!description.rating) {
    return res.status(400).json({ message: 'O campo rating é obrigatório'}); 
  }

  if (!description.difficulty) {
    return res.status(400).json({ message: 'O campo difficulty é obrigatório'}); 
  }

  next();
}

const createdAtValidation = (req, res, next) => {
  const { createdAt } = req.body.description;

  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!isFormatDate.test(createdAt)) {
    return res.status(400).json({ message: "O campo createdAt deve ter o formato \'dd/mm/aaaa\'"}); 
  }

  next();
}

const ratingValidation = (req, res, next) => {
  const { rating } = req.body.description;

  if ( !Number.isInteger(rating) || rating < 1 || rating > 5 ) {
    return res.status(400).json({ message: 'O campo rating dever ser um número inteiro entre 1 e 5'}); 
  }

  next();
}

const difficultyValidation = (req, res, next ) => {
  const { difficulty } = req.body.description;

  const difficultyProperties = ['Fácil', 'Médio', 'Difícil'];

  if (!difficultyProperties.includes(difficulty)) {
    return res.status(400).json({ message: 'O campo difficulty deve ser um desses valores: Fácil, Médio ou Difícil'});
  }

  next();
}

module.exports = { 
  descValidation, 
  createdAtValidation, 
  ratingValidation,
  difficultyValidation
};