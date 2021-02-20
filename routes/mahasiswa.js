const express = require("express");
const User = require("../app/Models/User");
const router = express.Router();

const mahasiswaList = [
  {
    id: 1,
    nama: "Hairul Anam",
  },
  {
    id: 2,
    nama: "Hamada",
  },
];

router.get("/", async function (req, res) {
  const users = await User.findAll();
  res.json({
    message: "success",
    data: users,
  });
});

router.get("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const mahasiswa = await User.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    message: "success",
    data: mahasiswa,
  });
});

router.post("/", async (req, res) => {
  const body = req.body;
  const user = await User.create(body);
  res.json(user);
});

router.put("/:id", async (req, res) => {
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
});

router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const result = await User.destroy({
      where: { id },
    });
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
});

module.exports = router;
