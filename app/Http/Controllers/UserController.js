const UserRepository = require("../../Repositories/UserRepository");

const UserController = {
  async index(req, res) {
    const users = await UserRepository.all();
    res.json({
      message: "success",
      data: users,
    });
  },

  async show(req, res) {
    const id = Number(req.params.id);
    const mahasiswa = await UserRepository.find(id);
    res.json({
      message: "success",
      data: mahasiswa,
    });
  },

  async store(req, res) {
    const body = req.body;
    const user = await UserRepository.create(body);
    res.json(user);
  },

  async update(req, res) {
    const id = Number(req.params.id);
    const body = req.body;
    const user = await User.update(body, {
      where: { id },
    });
    if (user[0] > 0) {
      res.json({
        message: "success",
      });
    } else {
      res.json({
        message: "failed",
      });
    }
  },

  async destroy(req, res) {
    try {
      const id = Number(req.params.id);
      const result = await UserRepository.delete(id);
      if (result > 0) {
        res.json({
          message: "success",
        });
      } else {
        res.json({
          message: "failed",
        });
      }
    } catch (error) {
      res.json({
        message: error.message,
      });
    }
  },
};

module.exports = UserController;
