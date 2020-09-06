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

router.get('/flash', function (req, res, next) {
  req.flash('info', 'Flash is back!');
  res.redirect('/');
});

router.get('/flash-disp', function (req, res, next) {
  res.status(200).json({
    'flash': {
      'message': req.flash('info')
    }
  });
});

module.exports = router;
