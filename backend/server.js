const express = require("express");
const app = express();
//import Routes
const authRoute = require("./routes/authRoute");
const productsRoute = require("./routes/productsRoute");
const ordersRoute = require("./routes/orderRoute");
//import mongoose
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.use(cors());
dotenv.config();

//connect to db

mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("connected to db...");
});

mongoose.connection.on("connected", function() {
  console.log("Mongoose connected");
});

mongoose.connection.on("error", function(err) {
  console.log("Mongoose connection error: " + err);
});

mongoose.connection.on("disconnected", function() {
  console.log("Mongoose disconnected");
});

//middlewares

app.use(express.json());
//Route Middlewares

app.use("/api/user", authRoute);
app.use("/api/products", productsRoute);
app.use("/api/orders", ordersRoute);
app.get("/", (req, res) => {
  res.send("testing");
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server running...");
});
