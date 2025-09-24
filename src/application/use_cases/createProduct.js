const Product = require('../../domain/entities/product');

class CreateProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(productData) {
    const newProduct = new Product({
      ...productData,
      STOK: productData.STOK || 0,
      TANGGAL_BUAT: new Date()
    });
    
    return await this.productRepository.save(newProduct);
  }
}

module.exports = CreateProduct;