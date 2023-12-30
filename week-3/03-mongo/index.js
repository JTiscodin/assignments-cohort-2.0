const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const mongoose = require("mongoose");
app.use(bodyParser.json());

// Middleware for parsing request bodies

app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = 3000;

function connectDB() {
  try {
    mongoose.connect(
      "mongodb+srv://admin-jatin:test123@cluster0.j3ba6jl.mongodb.net/TeachIt"
    );
    console.log("Successfully Connected");
  } catch (err) {
    console.log(err);
  }
}

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
