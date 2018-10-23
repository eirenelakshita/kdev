const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  email: {type: String, required: true, trim: true},
  password: {type: String, required: true, trim: true},
  lastName: {type: String, required: true, trim: true},
  midInit: {type: String, maxLength: 1, trim: true},
  firstName: {type: String, required: true, trim: true},
  suffixPrefix: {type: String, trim: true},
  streetAddress: {type: String, required: true, trim: true},
  addressLine2: {type: String, required: true, trim: true},
  city: {type: String, required: true, trim: true},
  state: {type: String, required: true, trim: true},
  zipCode: {type: String, required: true, trim: true},
  phoneNumber: {type: String, required: true, trim: true},
  dateofBirth: {type: String, required: true, trim: true},
  socialSecurityNumber: {type: Number, unique, required: true, trim: true},
  sex: {type: String, required: true, trim: true},
  maritalStatus: {type: String, required: true, trim: true},
  race: {type: String, required: true, trim: true},
  ethnicity: {type: String, required: true, trim: true},
  contactName: {type: String, required: true, trim: true},
  contactRelationship: {type: String, required: true, trim: true},
  contactPhoneNumber: {type: String, required: true, trim: true}
})

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;