const router = require("express").Router();
const messagesRoutes = require("./messages");
const visitsRoutes = require("./visits");
const identifyingInfoRoutes = require("./identifyinginfo");
const rxRoutes = require("./rx");

router.use("/messages", messagesRoutes);
router.use("/visits", visitsRoutes);
router.use("/identifyinginfo", identifyingInfoRoutes);
router.use("/rx", rxRoutes);

module.exports = router;