const router = require("express").Router();
const formController = require("../../controllers/formController");

router.route("/")
  .get(formController.findAll)
  .post(formController.create)
  
router.route("/:id")
  .put(formController.update)

module.exports = router;