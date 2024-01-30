import express from "express";
import "dotenv/config";
import loginRouter from "../src/routes/login.js";
import usersRouter from "../src/routes/users.js";
import hostsRouter from "../src/routes/hosts.js";
//import jwtCheck from "../src/utils/jwtCheck.js";
import errorHandler from "./utils/errorHandler.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.use(express.json());

//app.use(jwtCheck);
app.use("/login", loginRouter);
app.use("/users", usersRouter);
app.use("/hosts", hostsRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
