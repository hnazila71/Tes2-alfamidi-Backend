exports.up = (pgm) => {
  pgm.createTable('TB_MS_PRODUK', {
    PLU: { type: 'integer', primaryKey: true },
    DESCP: { type: 'varchar(50)', notNull: true },
    STOK: { type: 'integer', notNull: true, default: 0 },
    HARGA_BELI: { type: 'integer' },
    HARGA_JUAL: { type: 'integer' },
    MIN_ORDER: { type: 'integer' },
    MIN_STOK: { type: 'integer' },
    MAX_STOK: { type: 'integer' },
    TAG_PRODUK: { type: 'varchar(1)' },
    TANGGAL_BUAT: {
      type: 'date',
      notNull: true,
      default: pgm.func('current_date'),
    },
  });

  pgm.createTable('TB_TR_KOREKSI', {
    ID: 'id',
    PLU: {
      type: 'integer',
      notNull: true,
      references: '"TB_MS_PRODUK"("PLU")',
    },
    QTY: { type: 'integer' },
    TGL_KOREKSI: { type: 'date' },
    TANGGAL_BUAT: {
      type: 'date',
      notNull: true,
      default: pgm.func('current_date'),
    },
  });

  pgm.createTable('TB_TR_ORDER', {
    NO_FAKTUR: { type: 'varchar(255)', notNull: true },
    PLU: {
      type: 'integer',
      notNull: true,
      references: '"TB_MS_PRODUK"("PLU")',
    },
    TGL_ORDER: { type: 'date' },
    QTY: { type: 'integer' },
    HARGA: { type: 'integer' },
    STATUS_REC: { type: 'varchar(1)', default: 'F' },
    TANGGAL_BUAT: {
      type: 'date',
      notNull: true,
      default: pgm.func('current_date'),
    },
  });
  pgm.addConstraint('TB_TR_ORDER', 'pk_order', { primaryKey: ['NO_FAKTUR', 'PLU'] });

  pgm.createTable('TB_TR_RECEIVE', {
    ID: 'id',
    NO_FAKTUR: { type: 'varchar(255)', notNull: true },
    PLU: {
      type: 'integer',
      notNull: true,
      references: '"TB_MS_PRODUK"("PLU")',
    },
    TGL_RECEIVE: { type: 'date' },
    QTY: { type: 'integer' },
    HARGA_BELI: { type: 'integer' },
    TANGGAL_BUAT: {
      type: 'date',
      notNull: true,
      default: pgm.func('current_date'),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('TB_TR_RECEIVE');
  pgm.dropTable('TB_TR_ORDER');
  pgm.dropTable('TB_TR_KOREKSI');
  pgm.dropTable('TB_MS_PRODUK');
};