import axios from "axios";
// import nodemailer from "nodemailer";

export default {
  // Gets the message submitted
  // getMessage: function() {
  //   return axios.get("/api/messages");
  // },
  postMessage: function() {
    // var transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: 'kdev.spring2018@gmail.com',
    //     pass: 'gtatl20180508fsf'
    //   }
    // });

    // var mailOptions = {
    //   from: 'kdev.spring2018@gmail.com',
    //   to: 'laeirene59@gmail.com',
    //   subject: 'Sending Email using Node.js',
    //   text: 'That was easy!'
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log('Email sent: ' + info.response);
    //   }
    // });
    return axios.post("/api/messages");
  }
};
