const router = require("express").Router();
const messagesRoutes = require("./messages");
const visitsRoutes = require("./visits");
const identifyingInfoRoutes = require("./identifyinginfo");

router.use("/messages", messagesRoutes);
router.use("/visits", visitsRoutes);
router.use("/identifyinginfo", identifyingInfoRoutes);

module.exports = router;