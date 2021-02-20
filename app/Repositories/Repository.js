const Repository = {
  model() {
    return null;
  },
  async all() {
    const results = await this.model().findAll();
    return results;
  },
  async create(data) {
    const result = await this.model().create(data);
    return result;
  },
  async update(data, where) {
    const udpated = await this.model().update(where, data);
    return udpated;
  },
  async find(id) {
    const result = await this.model().findOne({
      where: { id },
    });
    return result;
  },
  async delete(id) {
    const deleted = await this.model().destroy({
      where: {
        id: id,
      },
    });
    return deleted;
  },
};

module.exports = Repository;
