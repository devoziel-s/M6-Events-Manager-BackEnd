import { Sequelize } from "sequelize";

const sequelize = new Sequelize('events_manager', 'root', '2004', {
  host: 'localhost',
  dialect: "mysql"
});

const connectToDataBase = async () =>{
  try{
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection established successfully");
  }
  catch{
    console("Error to connect with database")
  }
};

export {sequelize, connectToDataBase}