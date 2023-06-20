require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

//Express app
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes import
const productRoutes = require("./routes/productRoutes");
const basicRoutes = require("./routes/basicRoutes");
const cartRoutes = require("./routes/cartRoutes");

//Routes
app.use("/api/bakery/", basicRoutes);
app.use("/api/bakery/", productRoutes);
app.use("/api/bakery/", cartRoutes)

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to db");

    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
