const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.PatientProfile
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.PatientProfile
      .create(req.data)
      .then(dbModel => {console.log(dbModel); res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  }
};
