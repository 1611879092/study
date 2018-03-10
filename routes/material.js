var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('material', { title: '材料详情' });
});

module.exports = router;
