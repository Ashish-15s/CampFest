import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import eventRoute from "./routes/event.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(cookieParser());
//mongoose.connect(process.env.MONGO);
main().catch((err) => console.log(err));

async function main() {
  //  await mongoose.connect(process.env.MONGO);
  await mongoose.connect(process.env.MONGO);
  console.log("connected to database");
}
app.get("/", (res, req) => {
  req.send("hello");
});
app.use(express.json());
app.use("/users", usersRoute);
app.use("/auth", authRoute);
app.use("/event", eventRoute);
app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "something went wrong";
  return res.status(errStatus).json(errMessage);
});

app.listen(8000, () => {
  console.log("running on port 8000");
});
