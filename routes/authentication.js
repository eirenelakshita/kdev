const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const db = require("../models");


module.exports = app => {
  passport.use("local-patient-signin", new Strategy(
    (username, password, cb) => {
      console.log("hello", username, password);
      db.Patient.findOne({ username: username }).then((user) => {
        if (!user) return cb(null, false);
        if (user.password !== password) return cb (null, false);

        console.log("user:", user);
        return cb(null, user);
      })
    })
  )

  passport.serializeUser((user, cb) => cb(null, user._id));

  passport.deserializeUser((_id, cb) => {
    db.Patient.findById({ _id }).then(user => cb(null, user));
  });

  function ensureAuthenticated (req, res, next) {
    if (req.isAuthenticated()) { 
        return next();
    }
    console.log("not authenticated");
    res.json({"isAuth": false});
  }


  app.post("/login", passport.authenticate("local-patient-signin", {failureMessage: "not working"}), (req,res) => {
    console.log(req.body);
    res.json({"field": "hi"});
  });

  app.get("/isauth", ensureAuthenticated, (req, res) => {
    console.log("auth: " + req.user);
    res.json({"isAuth": true});
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.json({"logoutStatus": true});
  })

  // app.get("/tryme", (req, res) => {
  //   res.json({"isAuth": true});
  // });
};