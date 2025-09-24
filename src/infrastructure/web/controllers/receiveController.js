class ReceiveController {
  constructor(receiveItemsUseCase, getReceiveReportUseCase) {
    this.receiveItemsUseCase = receiveItemsUseCase;
    this.getReceiveReportUseCase = getReceiveReportUseCase;
  }

  async receive(req, res) {
    try {
      const result = await this.receiveItemsUseCase.execute(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getReport(req, res) {
    try {
      const report = await this.getReceiveReportUseCase.execute();
      res.status(200).json(report);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ReceiveController;