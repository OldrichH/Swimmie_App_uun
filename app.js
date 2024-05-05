const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const connectDB = require('./database/connection');

const swimmingRecordController = require("./controller/swimmingRecord");
const userController = require("./controller/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
connectDB(); //connection to mongoDB

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/swimming-record",swimmingRecordController);
app.use("/user",userController);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
