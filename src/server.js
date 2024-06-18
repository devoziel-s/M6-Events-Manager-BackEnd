import express from "express";
import { connectToDataBase } from "./database/dbConnection.js";
import "./database/associations.js";
import { router } from "./routes/index.routes.js";

const port = 3432;
const app = express();

app.use(express.json());
app.use(router);

app.listen(port, () => {
  connectToDataBase()
    .then(() => {
      console.log(`Server Running at port: ${port}`);
    })
    .catch((err) => {
      console.error("Error to connect with database", err);
    });
});
