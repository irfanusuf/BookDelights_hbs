// mongo db   instaall
// import mongoose
// mongoose is an ORM

const mongoose = require("mongoose");
const url = "mongodb+srv://irfanusuf33:ester4424@bookdelights.twhxoja.mongodb.net/BookDelights?retryWrites=true&w=majority&appName=BookDelights"
// const url = "mongodb://localhost:27017/bookStore"

const connectDB = async () => {
  try {

  await  mongoose.connect(url)
  console.log("Data base Connected on Community Server!!!!!!")

  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
