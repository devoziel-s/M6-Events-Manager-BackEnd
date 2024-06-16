import { DataTypes } from "sequelize";
import { sequelize } from "../database/dbConnection.js";

export const Event = sequelize.define("Event", {
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
  eventName:{
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  eventDescription:{
    type: DataTypes.TEXT,
    allowNull: false,
  },
  eventDate:{
    type: DataTypes.DATE,
    allowNull: false,
  },
  eventLocation:{
    type: DataTypes.STRING(255),
    allowNull: false
  },
  maxAttendees:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
})