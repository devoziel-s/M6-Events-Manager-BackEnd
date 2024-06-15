import express from "express";
import { connectToDataBase } from "./database/dbConnection.js";

const port = 3432
const app = express();


app.use(express.json());

app.listen(port, ()=>{
  connectToDataBase()
  console.log(`Server Running at port: ${port}`)
})