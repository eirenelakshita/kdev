const router = require("express").Router();
const messagesRoutes = require("./messages");

// Book routes
router.use("/messages", messagesRoutes);

module.exports = router;