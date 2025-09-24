require('dotenv').config();
const createApp = require('./infrastructure/web/server');
const pool = require('./infrastructure/database/connection');

// Repositories
const ProductRepositoryPostgres = require('./infrastructure/database/repositories/productRepositoryPostgres');
const KoreksiRepositoryPostgres = require('./infrastructure/database/repositories/koreksiRepositoryPostgres');
const OrderRepositoryPostgres = require('./infrastructure/database/repositories/orderRepositoryPostgres');
const ReceiveRepositoryPostgres = require('./infrastructure/database/repositories/receiveRepositoryPostgres');

// Use Cases
const CreateProduct = require('./application/use_cases/createProduct');
const CorrectStock = require('./application/use_cases/correctStock');
const ProcessOrder = require('./application/use_cases/processOrder');
const ReceiveItems = require('./application/use_cases/receiveItems');
const GetProductReport = require('./application/use_cases/getProductReport');
const GetOrderReport = require('./application/use_cases/getOrderReport');
const GetReceiveReport = require('./application/use_cases/getReceiveReport');

// Controllers
const ProductController = require('./infrastructure/web/controllers/productController');
const StockController = require('./infrastructure/web/controllers/stockController');
const OrderController = require('./infrastructure/web/controllers/orderController');
const ReceiveController = require('./infrastructure/web/controllers/receiveController');


const startServer = async () => {
  try {
    await pool.connect();
    console.log('Database connected successfully!');

    // 1. Create Repository Instances
    const productRepository = new ProductRepositoryPostgres(pool);
    const koreksiRepository = new KoreksiRepositoryPostgres(pool);
    const orderRepository = new OrderRepositoryPostgres(pool);
    const receiveRepository = new ReceiveRepositoryPostgres(pool);

    // 2. Create Use Case Instances (injecting repositories)
    const createProductUseCase = new CreateProduct(productRepository);
    const getProductReportUseCase = new GetProductReport(productRepository);
    const correctStockUseCase = new CorrectStock(productRepository, koreksiRepository);
    const processOrderUseCase = new ProcessOrder(productRepository, orderRepository);
    const getOrderReportUseCase = new GetOrderReport(orderRepository);
    const receiveItemsUseCase = new ReceiveItems(productRepository, receiveRepository);
    const getReceiveReportUseCase = new GetReceiveReport(receiveRepository);

    // 3. Create Controller Instances (injecting use cases)
    const productController = new ProductController(createProductUseCase, getProductReportUseCase);
    const stockController = new StockController(correctStockUseCase);
    const orderController = new OrderController(processOrderUseCase, getOrderReportUseCase);
    const receiveController = new ReceiveController(receiveItemsUseCase, getReceiveReportUseCase);

    // 4. Create App (injecting controllers)
    const app = createApp({ productController, stockController, orderController, receiveController });
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error('Failed to start the server.', error);
    process.exit(1);
  }
};

startServer();