const mongoose = require("mongoose");

module.exports = () => {
  // const connectionParams = {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true
  // };
  try{
    mongoose.connect(process.env.cc);
    console.log("Connected to database successfully")
  }
  catch(error){
    console.log("Error connecting to database: ", error)
    console.log("Error connecting to database")
  }
}