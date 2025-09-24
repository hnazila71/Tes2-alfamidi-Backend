exports.up = (pgm) => {
  pgm.sql(`
    INSERT INTO "TB_MS_PRODUK" ("PLU", "DESCP", "STOK", "HARGA_BELI", "HARGA_JUAL", "MIN_ORDER", "MIN_STOK", "MAX_STOK", "TAG_PRODUK") VALUES
    (1001, 'Susu Coklat 1L', 8, 15000, 18000, 10, 10, 50, 'F'),
    (1002, 'Kopi Bubuk Instan', 15, 25000, 30000, 5, 20, 75, 'F'),
    (2002, 'Roti Tawar Gandum', 25, 12000, 15000, 10, 20, 100, 'B'),
    (3003, 'Biskuit Kelapa Lama', 5, 8000, 10000, 20, 10, 30, 'D');
  `);
};

exports.down = (pgm) => {
  pgm.sql(`
    DELETE FROM "TB_MS_PRODUK" WHERE "PLU" IN (1001, 1002, 2002, 3003);
  `);
};