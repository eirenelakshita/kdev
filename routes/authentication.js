const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const router = require("express").Router;

const db = require("../models");

passport.use("local-signin-patient", new Strategy(
  (username, password, cb) => {
    console.log("hello", username);
    // db.Patient.findOne({ email: username }).then((user) => {
    //   if (!user) return cb(null, false);
    //   if (user.dataValues.password !== password) return cb (null, false);

    //   console.log("user:", user.dataValues);
    //   return cb(null, user);
    // })
    if (username === "username" && password === "password") {
      return cb(null, user)
    } else {
      return cb(null, false)
    }
  })
)

passport.serializeUser((user, cb) => cb(null,user.id));

passport.deserializeUser((id, cb) => {
  db.Patient.findById({ id }).then(user => cb(null,user));
})

router.route("/")
  .post(passport.authenticate("local-sigin-patient", {successRedirect: "/patients", failureRedirect: "/"}), (req,res) => {
    console.log("success");
  });

module.exports = router;