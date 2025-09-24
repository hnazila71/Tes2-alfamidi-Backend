const express = require('express');
const router = express.Router();

module.exports = (receiveController) => {
  router.post('/', (req, res) => receiveController.receive(req, res));
  router.get('/', (req, res) => receiveController.getReport(req, res));
  return router;
};