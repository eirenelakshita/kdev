const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const db = require("../models");


module.exports = app => {
  passport.use("local-patient-signin", new Strategy(
    (username, password, cb) => {
      console.log("hello", username);
      db.Patient.findOne({ username: username }).then((user) => {
        if (!user) return cb(null, false);
        if (user.password !== password) return cb (null, false);

        console.log("user:", user);
        return cb(null, user);
      })
    })
  )

  passport.serializeUser((user, cb) => cb(null, user._id));

  passport.deserializeUser((id, cb) => {
    db.Patient.findById({ id }).then(user => cb(null, user));
  });


  app.post("/login", passport.authenticate("local-patient-signin"), (req,res) => {
    console.log(req.body);
    res.json({"field": "hi"});
  });
};