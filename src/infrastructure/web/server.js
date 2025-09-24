const express = require('express');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');
const stockRoutes = require('./routes/stockRoutes');
const orderRoutes = require('./routes/orderRoutes');
const receiveRoutes = require('./routes/receiveRoutes');

const createApp = ({ productController, stockController, orderController, receiveController }) => {
  const app = express();
  app.use(cors()); 
  app.use(express.json());
  

  app.get('/', (req, res) => {
    res.send('Inventory System API is running...');
  });

  app.use('/products', productRoutes(productController));
  app.use('/stock', stockRoutes(stockController));
  app.use('/orders', orderRoutes(orderController));
  app.use('/receive', receiveRoutes(receiveController));
  
  return app;
};

module.exports = createApp;