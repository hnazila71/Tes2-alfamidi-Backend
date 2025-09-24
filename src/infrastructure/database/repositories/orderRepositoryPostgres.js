const IOrderRepository = require('../../../domain/repositories/iOrderRepository');

class OrderRepositoryPostgres extends IOrderRepository {
  constructor(pool) {
    super();
    this.pool = pool;
  }

  async save(order) {
    const { NO_FAKTUR, TGL_ORDER, PLU, QTY, HARGA, STATUS_REC } = order;
    const query = `
      INSERT INTO "TB_TR_ORDER" ("NO_FAKTUR", "TGL_ORDER", "PLU", "QTY", "HARGA", "STATUS_REC") 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING *`;
    const values = [NO_FAKTUR, TGL_ORDER, PLU, QTY, HARGA, STATUS_REC];
    const result = await this.pool.query(query, values);
    return result.rows[0];
  }

  async findAll() {
    const query = 'SELECT * FROM "TB_TR_ORDER" ORDER BY "TGL_ORDER" DESC';
    const result = await this.pool.query(query);
    return result.rows;
  }
}

module.exports = OrderRepositoryPostgres;