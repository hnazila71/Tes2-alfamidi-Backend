class Order {
  constructor({ NO_FAKTUR, TGL_ORDER, PLU, QTY, HARGA, STATUS_REC, TANGGAL_BUAT }) {
    this.NO_FAKTUR = NO_FAKTUR;
    this.TGL_ORDER = TGL_ORDER;
    this.PLU = PLU;
    this.QTY = QTY;
    this.HARGA = HARGA;
    this.STATUS_REC = STATUS_REC;
    this.TANGGAL_BUAT = TANGGAL_BUAT;
  }
}

module.exports = Order;