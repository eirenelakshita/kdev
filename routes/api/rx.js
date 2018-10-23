const router = require("express").Router();
const rxController = require("../../controllers/rxControllers");

// Matches with "/api/books"
router.route("/")
  .get(rxController.findAll)
  .post(rxController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(rxController.findById)
//   .put(rxController.update)
//   .delete(rxController.remove);

module.exports = router;