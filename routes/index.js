var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var userData = req.user;

  var fmsg = req.flash();
  var errorFlashMsg = (fmsg.error)? fmsg.error[0]: '';
  var successFlashMsg = (fmsg.success)? fmsg.success[0]: '';

  res.status(200).json({
    userData,
    errorFlashMsg,
    successFlashMsg
  })
});

router.get('/logout', function(req, res, next) {
  req.logout();
});

module.exports = router;
