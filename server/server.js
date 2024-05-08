import express from "express";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "./src/model/DbConnection.js";
import router from "./src/routes/index.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

let PORT = process.env.PORT || 3000;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`App is Listening Dude ${PORT}`.bgMagenta);
});
