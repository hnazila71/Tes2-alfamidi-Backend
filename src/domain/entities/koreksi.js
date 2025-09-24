class Koreksi {
  constructor({ ID, PLU, QTY, TGL_KOREKSI, TANGGAL_BUAT }) {
    this.ID = ID;
    this.PLU = PLU;
    this.QTY = QTY;
    this.TGL_KOREKSI = TGL_KOREKSI;
    this.TANGGAL_BUAT = TANGGAL_BUAT;
  }
}

module.exports = Koreksi;