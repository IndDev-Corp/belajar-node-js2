const { DataTypes } = require("sequelize");
const sequelize = require("../../database/connection");

const Mahasiswa = sequelize.define(
  "Mahasiswa",
  {
    // Model attributes are defined here
    nim: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    tableName: "mahasiswa",
    timestamps: false,
  }
);

module.exports = Mahasiswa;
