class GetOrderReport {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute() {
    return await this.orderRepository.findAll();
  }
}

module.exports = GetOrderReport;