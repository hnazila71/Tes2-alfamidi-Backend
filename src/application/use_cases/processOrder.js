const Order = require('../../domain/entities/order');

class ProcessOrder {
  constructor(productRepository, orderRepository) {
    this.productRepository = productRepository;
    this.orderRepository = orderRepository;
  }

  async execute({ TGL_ORDER, NO_FAKTUR }) {
    const productsToOrder = await this.productRepository.findProductsForOrder();
    const createdOrders = [];

    for (const product of productsToOrder) {
      const orderQty = product.MAX_STOK - product.STOK;

      if (orderQty > 0) {
        const newOrder = new Order({
          NO_FAKTUR: NO_FAKTUR,
          TGL_ORDER: TGL_ORDER,
          PLU: product.PLU,
          QTY: orderQty,
          HARGA: product.HARGA_BELI,
          STATUS_REC: 'F',
          TANGGAL_BUAT: new Date()
        });
        
        await this.orderRepository.save(newOrder);
        createdOrders.push(newOrder);
      }
    }
    
    return createdOrders;
  }
}

module.exports = ProcessOrder;