var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Express',
      link: '<link rel=\'stylesheet\' href=\'/stylesheets/index.css\' />',
      script: '<script src="javascripts/indexpage.js"></script>'
  });

});

module.exports = router;
