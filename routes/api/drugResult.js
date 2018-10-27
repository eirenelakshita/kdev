const router = require("express").Router();
const drugController = require("../../controllers/drugController");



// Matches with "/api/blood"
router.route("/")
  .get(drugController.findAll)
  

// Matches with "/api/visits/:id"
// router
//   .route("/:id")
//   .get(drugController.findById)


module.exports = router;
