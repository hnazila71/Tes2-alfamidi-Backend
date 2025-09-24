const Koreksi = require('../../domain/entities/koreksi');

class CorrectStock {
  constructor(productRepository, koreksiRepository) {
    this.productRepository = productRepository;
    this.koreksiRepository = koreksiRepository;
  }

  async execute({ PLU, STOK_BARU }) {
    await this.productRepository.updateStock(PLU, STOK_BARU);

    const koreksiData = new Koreksi({
      PLU: PLU,
      QTY: STOK_BARU,
      TGL_KOREKSI: new Date(),
      TANGGAL_BUAT: new Date()
    });

    return await this.koreksiRepository.save(koreksiData);
  }
}

module.exports = CorrectStock;