require("dotenv").config(); //to access dotenv file
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

connection();
