const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const methodOverride = require("method-override");
const { default: mongoose, connection } = require("mongoose");

const taskRouter = require('./routes/taskRouter')

const app = express();
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs')

app.use('/', taskRouter);

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log(`connected to: ${connection.host}`);
});

app.listen(port, () => {
  console.log("connected");
});
