class IProductRepository {
  async save(product) {
    throw new Error('METHOD_NOT_IMPLEMENTED');
  }

  async findByPlu(plu) {
    throw new Error('METHOD_NOT_IMPLEMENTED');
  }

  async updateStock(plu, newStock) {
    throw new Error('METHOD_NOT_IMPLEMENTED');
  }

  async findProductsForOrder() {
    throw new Error('METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = IProductRepository;