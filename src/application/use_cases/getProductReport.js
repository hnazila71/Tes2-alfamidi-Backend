class GetProductReport {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute() {
    return await this.productRepository.findAll();
  }
}

module.exports = GetProductReport;