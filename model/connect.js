const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("kdan", "admin", "l5341500", {
  host: "database-2.cx0zufsjusrp.us-east-2.rds.amazonaws.com",
  dialect: "mysql",
});

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Unable to connect to database:", error);
  }
}

async function syncDB() {
  try {
    await sequelize.sync({ force: true });
    console.log("All models were sync successfully.");
  } catch (error) {
    console.log("Sync error:", error);
  }
}



module.exports = { connectDB, sequelize,syncDB };
