var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var userData = req.user;
  res.status(200).json({
    userData
  })
});

router.get('/logout', function(req, res, next) {
  req.logout();
})

module.exports = router;
