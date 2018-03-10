const express = require('express');
const router = express.Router();
const co = require('co');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const practicemenu = require('../bin/practicemenu');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

router.post('/getpracticemenu', function (req, res) {
    co(function* () {
        const practicemenuData = yield practicemenu.findAll({
            attributes: ['id', 'name'],
            where: {
                'bigid': req.body.bigid
            }
        });
        res.status(200).json({code: 200, msg: '成功', data:practicemenuData})
    }).catch(function (e) {
        console.log(e)
    });
});




module.exports = router;
