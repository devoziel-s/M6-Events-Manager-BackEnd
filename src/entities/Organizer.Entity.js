import { DataTypes } from "sequelize";
import { sequelize } from "../database/dbConnection.js";

export const Organizer = sequelize.define("Organizer", {
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  public_id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  name:{
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  phone:{
    type: DataTypes.STRING(11),
    allowNull: false
  }
})