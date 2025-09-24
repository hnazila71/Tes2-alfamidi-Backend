class StockController {
  constructor(correctStockUseCase) {
    this.correctStockUseCase = correctStockUseCase;
  }

  async correct(req, res) {
    try {
      const { PLU } = req.params;
      const { STOK_BARU } = req.body;
      const result = await this.correctStockUseCase.execute({ PLU: parseInt(PLU), STOK_BARU });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = StockController;