const fs = require('fs').promises;
const path = require('path');

const moviesPath = path.resolve(__dirname, './movies.json');

const readFileData = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    const response = JSON.parse(data);
    
    return response;
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

module.exports = { readFileData };