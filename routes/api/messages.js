const router = require("express").Router();
// const messagesController = require("../../controllers/messagesController");

// Matches with "/api/messages"
// Listening for post & get request
router.route("/")
  .post(function(req, res){
    console.log("I've been hit!");
    res.send({message:'TODO: return all posts'})});

module.exports = router;