const IKoreksiRepository = require('../../../domain/repositories/iKoreksiRepository');

class KoreksiRepositoryPostgres extends IKoreksiRepository {
  constructor(pool) {
    super();
    this.pool = pool;
  }

  async save(koreksi) {
    const { PLU, QTY, TGL_KOREKSI } = koreksi;
    const query = `
      INSERT INTO "TB_TR_KOREKSI" ("PLU", "QTY", "TGL_KOREKSI") 
      VALUES ($1, $2, $3) 
      RETURNING *`;
    const values = [PLU, QTY, TGL_KOREKSI];
    const result = await this.pool.query(query, values);
    return result.rows[0];
  }

  async findAll() {
    const query = 'SELECT * FROM "TB_TR_KOREKSI" ORDER BY "TGL_KOREKSI" DESC';
    const result = await this.pool.query(query);
    return result.rows;
  }
}

module.exports = KoreksiRepositoryPostgres;