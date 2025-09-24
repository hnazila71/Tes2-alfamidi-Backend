class Receive {
  constructor({ ID, NO_FAKTUR, TGL_RECEIVE, PLU, QTY, HARGA_BELI, TANGGAL_BUAT }) {
    this.ID = ID;
    this.NO_FAKTUR = NO_FAKTUR;
    this.TGL_RECEIVE = TGL_RECEIVE;
    this.PLU = PLU;
    this.QTY = QTY;
    this.HARGA_BELI = HARGA_BELI;
    this.TANGGAL_BUAT = TANGGAL_BUAT;
  }
}

module.exports = Receive;