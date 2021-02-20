const { DataTypes } = require("sequelize");
const sequelize = require("../../database/connection");

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    tableName: "users",
    timestamps: false,
  }
);

module.exports = User;
