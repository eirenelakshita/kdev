const router = require("express").Router();
const bloodController = require("../../controllers/bloodController");

// Matches with "/api/blood"
router.route("/")
  .get(bloodController.findAll)
  

// Matches with "/api/visits/:id"
// router
//   .route("/:id")
//   .get(bloodController.findById)


module.exports = router;
