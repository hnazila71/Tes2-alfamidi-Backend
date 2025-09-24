const express = require('express');
const router = express.Router();

module.exports = (stockController) => {
  router.post('/:PLU/correct', (req, res) => stockController.correct(req, res));
  return router;
};