const { Sequelize } = require("sequelize");
const DB_NAME = "belajar_node_js2";
const DB_USERNAME = "root";
const DB_PASSWORD = "";
const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

async function checkConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = sequelize;
