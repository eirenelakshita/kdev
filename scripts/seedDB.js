const mongoose = require("mongoose");
const db = require("../client/models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/kdevproject"
);

const visitSeed = [
  {
    patientID: "1001",
	DoctorID: "5001",
	Doctor_Speciality: "Dental",
	Prescription: "Morphine",
	Diagnosis: "Crown needed",
  Data: "Come again",
  Time: Date.now
  },
  {
    patientID: "1002",
    DoctorID: "5002",
    Doctor_Speciality: "Psychiatry",
    Prescription: "Zophran",
    Diagnosis: "She's crazy",
    Data: "Hope this helps!",
    Time: Date.now
  },
  {
    patientID: "1003",
    DoctorID: "5003",
    Doctor_Speciality: "Cardiology",
    Prescription: "Q10 Vitamins",
    Diagnosis: "Clogged artery",
    Data: "Just needs to exercise..",
    Time: Date.now
  },
  {
    patientID: "1004",
    DoctorID: "5004",
    Doctor_Speciality: "Dermatology",
    Prescription: "Aquaphor",
    Diagnosis: "Eczema",
    Data: "Auto-immune reaction to wheat allergy",
    Time: Date.now
  },
  {
    patientID: "1005",
    DoctorID: "5005",
    Doctor_Speciality: "Ophthalmologists",
    Prescription: "Carrots",
    Diagnosis: "Cataracts",
    Data: "Easy surgery should suffice",
    Time: Date.now
  },
  {
    patientID: "1006",
    DoctorID: "5006",
    Doctor_Speciality: "General Practitioner",
    Prescription: "Vitamins",
    Diagnosis: "All good",
    Data: "He's okay",
    Time: Date.now
  }
];

db.Visit
  .remove({})
  .then(() => db.Visit.collection.insertMany(visitSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });