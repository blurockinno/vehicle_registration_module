const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
    Name: String,
    age: String,
    temporaryAddress: String,
    permanentAddress: String,
    ownershipType: String,
    registrationDate: String,
    registrationNo: String,
    mobileNumber: String,
    validityUpto: String
  });

module.exports = mongoose.model("FormData", formDataSchema);