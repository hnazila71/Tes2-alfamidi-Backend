class ProductController {
  constructor(createProductUseCase, getProductReportUseCase) {
    this.createProductUseCase = createProductUseCase;
    this.getProductReportUseCase = getProductReportUseCase;
  }

  async create(req, res) {
    try {
      const product = await this.createProductUseCase.execute(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getReport(req, res) {
    try {
      const report = await this.getProductReportUseCase.execute();
      res.status(200).json(report);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ProductController;