class GetReceiveReport {
  constructor(receiveRepository) {
    this.receiveRepository = receiveRepository;
  }

  async execute() {
    return await this.receiveRepository.findAll();
  }
}

module.exports = GetReceiveReport;