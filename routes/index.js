var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Web Express V1.0.0' });
  console.log("Server on port: 3000");
});

module.exports = router;
