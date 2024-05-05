const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const connectDB = require('./database/connection');

const swimmingRecordController = require("./controller/swimmingRecord");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
connectDB(); //connection to mongoDB

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/swimming-record",swimmingRecordController);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
