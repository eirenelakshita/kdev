const router = require("express").Router();
const formController = require("../../controllers/formController");

router.route("/")
  .post(formController.create)

module.exports = router;