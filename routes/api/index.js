const router = require("express").Router();
const messagesRoutes = require("./messages");
const visitsRoutes = require("./visits");

router.use("/messages", messagesRoutes);
router.use("/visits", visitsRoutes);

module.exports = router;