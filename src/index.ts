import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import router from "./router";

const app = express();
const port = process.env.PORT || 8080;
const mongoURL = process.env.MONGO_DB_STRING;

app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(port, () => console.log(`Server running on port ${port}`));

mongoose.Promise = Promise;
mongoose.connect(mongoURL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
