const express = require('express');
const router = express.Router();

module.exports = (orderController) => {
  router.post('/process', (req, res) => orderController.process(req, res));
  router.get('/', (req, res) => orderController.getReport(req, res));
  return router;
};