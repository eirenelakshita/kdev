const router = require("express").Router();

router.route("/")
  .post((req, res) => {
    console.log("A hit! A direct hit!");
    res.end();
  })

module.exports = router;