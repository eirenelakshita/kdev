const express = require("express");

// const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/kdevproject");


//////////////////////NODEMAILER//////////////////
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kdev.spring2018@gmail.com',
    pass: 'gtatl20180508fsf'
  }
});

var mailOptions = {
  from: 'kdev.spring2018@gmail.com',
  to: 'laeirene59@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
//////////////////////NODEMAILER//////////////////




// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
