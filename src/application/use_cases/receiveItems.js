const Receive = require('../../domain/entities/receive');

class ReceiveItems {
  constructor(productRepository, receiveRepository) {
    this.productRepository = productRepository;
    this.receiveRepository = receiveRepository;
  }

  async execute({ NO_FAKTUR, TGL_RECEIVE, ITEMS }) {
    const receivedRecords = [];

    for (const item of ITEMS) {
      const product = await this.productRepository.findByPlu(item.PLU);
      if (product) {
        const newStock = product.STOK + item.QTY;
        await this.productRepository.updateStock(item.PLU, newStock);

        const newReceive = new Receive({
          NO_FAKTUR,
          TGL_RECEIVE,
          PLU: item.PLU,
          QTY: item.QTY,
          HARGA_BELI: item.HARGA_BELI,
          TANGGAL_BUAT: new Date()
        });

        await this.receiveRepository.save(newReceive);
        receivedRecords.push(newReceive);
      }
    }
    return receivedRecords;
  }
}

module.exports = ReceiveItems;