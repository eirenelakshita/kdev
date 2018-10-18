const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitSchema = new Schema({
	// patientID:
	// DoctorID:
	Doctor_Speciality: { type: String, required: true },
	Prescription: String,
	Diagnosis: { type: String, required: true },
	Data: String,
	Time: { type: Date, default: Date.now }
});

const Visit = mongoose.model("Visit", visitSchema);

module.exports = Visit;