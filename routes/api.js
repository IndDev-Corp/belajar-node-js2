const express = require("express");
const MahasiswaController = require("../app/Http/Controllers/MahasiswaController");
const UserController = require("../app/Http/Controllers/UserController");
const router = express.Router();

// USERS
router.get("/users/", UserController.index);
router.get("/users/:id", UserController.show);
router.post("/users/", UserController.store);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.destroy);

// MAHASISWA
router.get("/mahasiswa/", MahasiswaController.index);
router.get("/mahasiswa/:id", MahasiswaController.show);
router.post("/mahasiswa/", MahasiswaController.store);
router.put("/mahasiswa/:id", MahasiswaController.update);
router.delete("/mahasiswa/:id", MahasiswaController.destroy);

module.exports = router;
