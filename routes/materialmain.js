var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('materialmain', { title: '题目详情' });
});

module.exports = router;
