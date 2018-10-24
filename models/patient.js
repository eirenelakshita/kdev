const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  email: {type: String, required: true, trim: true},
  password: {type: String, required: true, trim: true},
  lastName: {type: String, required: true, trim: true},
  midInit: {type: String, maxLength: 1, trim: true},
  firstName: {type: String, required: true, trim: true},
  suffixPrefix: {type: String, trim: true},
  streetAddress: {type: String, trim: true},
  addressLine2: {type: String, trim: true},
  city: {type: String, trim: true},
  state: {type: String, trim: true},
  zipCode: {type: String, trim: true},
  phoneNumber: {type: String, trim: true},
  dateofBirth: {type: String, trim: true},
  socialSecurityNumber: {type: Number, unique: true, trim: true},
  sex: {type: String, trim: true},
  maritalStatus: {type: String, trim: true},
  race: {type: String, trim: true},
  ethnicity: {type: String, trim: true},
  contactName: {type: String, trim: true},
  contactRelationship: {type: String, trim: true},
  contactPhoneNumber: {type: String, trim: true}
})

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;