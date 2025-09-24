class Product {
  constructor({
    PLU,
    DESCP,
    STOK,
    HARGA_BELI,
    HARGA_JUAL,
    MIN_ORDER,
    MIN_STOK,
    MAX_STOK,
    TAG_PRODUK,
    TANGGAL_BUAT
  }) {
    this.PLU = PLU;
    this.DESCP = DESCP;
    this.STOK = STOK;
    this.HARGA_BELI = HARGA_BELI;
    this.HARGA_JUAL = HARGA_JUAL;
    this.MIN_ORDER = MIN_ORDER;
    this.MIN_STOK = MIN_STOK;
    this.MAX_STOK = MAX_STOK;
    this.TAG_PRODUK = TAG_PRODUK;
    this.TANGGAL_BUAT = TANGGAL_BUAT;
  }
}

module.exports = Product;