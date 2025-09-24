class IOrderRepository {
  async save(order) {
    throw new Error('METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = IOrderRepository;