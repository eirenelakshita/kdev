const router = require("express").Router();
const visitsController = require("../../controllers/visitsController");

// Matches with "/api/books"
router.route("/")
  .get(visitsController.findAll)
  .post(visitsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(visitsController.findById)
  .put(visitsController.update)
  .delete(visitsController.remove);

module.exports = router;
