const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const passportLocalMongoose = require("passport-local-mongoose");

const Patient = new Schema({
  username: String,
  password: String
});

// Patient.plugin(passportLocalMongoose);

module.exports = mongoose.model("Patient", Patient);