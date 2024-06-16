import { Sequelize } from "sequelize";

const sequelize = new Sequelize('events_manager', 'root', '2004', {
  host: 'localhost',
  dialect: "mysql"
});

const connectToDataBase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established successfully");
  } catch (error) {
    console.error("Error to connect with database", error);
  }
};

export { sequelize, connectToDataBase };
