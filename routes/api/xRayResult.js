const router = require("express").Router();
const xRayController = require("../../controllers/xRayController");



// Matches with "/api/xRay"
router.route("/")
  .get(xRayController.findAll)
  

// Matches with "/api/visits/:id"
// router
//   .route("/:id")
//   .get(drugController.findById)


module.exports = router;
