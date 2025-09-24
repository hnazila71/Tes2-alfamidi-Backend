const IProductRepository = require('../../../domain/repositories/iProductRepository');

class ProductRepositoryPostgres extends IProductRepository {
  constructor(pool) {
    super();
    this.pool = pool;
  }

  async save(product) {
    const { PLU, DESCP, STOK, HARGA_BELI, HARGA_JUAL, MIN_ORDER, MIN_STOK, MAX_STOK, TAG_PRODUK } = product;
    const query = `
      INSERT INTO "TB_MS_PRODUK" ("PLU", "DESCP", "STOK", "HARGA_BELI", "HARGA_JUAL", "MIN_ORDER", "MIN_STOK", "MAX_STOK", "TAG_PRODUK") 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
      RETURNING *`;
    const values = [PLU, DESCP, STOK, HARGA_BELI, HARGA_JUAL, MIN_ORDER, MIN_STOK, MAX_STOK, TAG_PRODUK];
    const result = await this.pool.query(query, values);
    return result.rows[0];
  }

  async findByPlu(plu) {
    const query = 'SELECT * FROM "TB_MS_PRODUK" WHERE "PLU" = $1';
    const result = await this.pool.query(query, [plu]);
    return result.rows[0];
  }

  async updateStock(plu, newStock) {
    const query = 'UPDATE "TB_MS_PRODUK" SET "STOK" = $1 WHERE "PLU" = $2 RETURNING *';
    const result = await this.pool.query(query, [newStock, plu]);
    return result.rows[0];
  }

  async findProductsForOrder() {
    const query = `
      SELECT * FROM "TB_MS_PRODUK" 
      WHERE "STOK" < "MIN_STOK" AND ("TAG_PRODUK" = 'F' OR "TAG_PRODUK" = 'B')`;
    const result = await this.pool.query(query);
    return result.rows;
  }

  async findAll() {
    const query = 'SELECT * FROM "TB_MS_PRODUK" ORDER BY "PLU" ASC';
    const result = await this.pool.query(query);
    return result.rows;
  }
}

module.exports = ProductRepositoryPostgres;