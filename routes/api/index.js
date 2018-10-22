const router = require("express").Router();
const messagesRoutes = require("./messages");
const visitsRoutes = require("./visits");
const rxRoutes = require("./rx");

// Book routes
router.use("/messages", messagesRoutes);

router.use("/visits", visitsRoutes);

router.use("/rx", rxRoutes);

module.exports = router;