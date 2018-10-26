const router = require("express").Router();
const xrayController = require("../../controllers/xRayController");



// Matches with "/api/blood"
router.route("/")
  .get(xrayController.findAll)
  

// Matches with "/api/visits/:id"
// router
//   .route("/:id")
//   .get(drugController.findById)


module.exports = router;
