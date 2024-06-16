import express from "express";
import { connectToDataBase } from "./database/dbConnection.js";
import "./database/associations.js";

const port = 3432;
const app = express();

app.use(express.json());

app.listen(port, () => {
  connectToDataBase()
    .then(() => {
      console.log(`Server Running at port: ${port}`);
    })
    .catch((err) => {
      console.error("Error to connect with database", err);
    });
});
