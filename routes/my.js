var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('my', { title: '我的' });
});

module.exports = router;
