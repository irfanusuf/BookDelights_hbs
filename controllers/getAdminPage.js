const Book = require("../models/bookModel");

const getAdminPage = async (req, res) => {
    try {
      // the books data coming from mongoose is not a staright json object .... thats why hbs was not able to acces properties
  
      // .lean method changes this object into json object and problem is solvd
      const data = await Book.find().lean();
  
      res.render("secureHome", {
        pageTitle: "BookStore | AdminDashboard",
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  };


  module.exports = getAdminPage