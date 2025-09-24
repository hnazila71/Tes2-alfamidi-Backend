class OrderController {
  constructor(processOrderUseCase, getOrderReportUseCase) {
    this.processOrderUseCase = processOrderUseCase;
    this.getOrderReportUseCase = getOrderReportUseCase;
  }

  async process(req, res) {
    try {
      const { TGL_ORDER, NO_FAKTUR } = req.body;
      const orders = await this.processOrderUseCase.execute({ TGL_ORDER, NO_FAKTUR });
      res.status(201).json(orders);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getReport(req, res) {
    try {
      const report = await this.getOrderReportUseCase.execute();
      res.status(200).json(report);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = OrderController;