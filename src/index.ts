// src/index.ts
import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./routes/index";
import Boom from "boom";
import Database from "./config/database";

const database = new Database();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/", router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

database.connect();
