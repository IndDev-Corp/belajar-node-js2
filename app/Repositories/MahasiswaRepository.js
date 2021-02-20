const Mahasiswa = require("../Models/Mahasiswa");
const Repository = require("./Repository");

const MahasiswaRepository = Object.assign(Repository, {
  model() {
    return Mahasiswa;
  },

  async getOrderByFirstName() {
    const results = await Mahasiswa.findAll({
      order: [["name"], ["nim"]],
    });
    return results;
  },
});

module.exports = MahasiswaRepository;
