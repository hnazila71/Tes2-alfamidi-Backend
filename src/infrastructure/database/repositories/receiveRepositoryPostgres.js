const IReceiveRepository = require('../../../domain/repositories/iReceiveRepository');

class ReceiveRepositoryPostgres extends IReceiveRepository {
  constructor(pool) {
    super();
    this.pool = pool;
  }

  async save(receive) {
    const { NO_FAKTUR, TGL_RECEIVE, PLU, QTY, HARGA_BELI } = receive;
    const query = `
      INSERT INTO "TB_TR_RECEIVE" ("NO_FAKTUR", "TGL_RECEIVE", "PLU", "QTY", "HARGA_BELI") 
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *`;
    const values = [NO_FAKTUR, TGL_RECEIVE, PLU, QTY, HARGA_BELI];
    const result = await this.pool.query(query, values);
    return result.rows[0];
  }

  async findAll() {
    const query = 'SELECT * FROM "TB_TR_RECEIVE" ORDER BY "TGL_RECEIVE" DESC';
    const result = await this.pool.query(query);
    return result.rows;
  }
}

module.exports = ReceiveRepositoryPostgres;