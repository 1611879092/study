const express = require('express');
const router = express.Router();
const co = require('co');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const practicemenu = require('../../bin/practicemenu');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('admin/practicemenu', {title: '材料详情'});
});

router.post('/', function (req, res) {
    co(function* () {
        const practicemenuData = yield practicemenu.findAll({
            attributes: ['id', 'name']
        });
        res.status(200).json({code: 200, msg: '成功', data:practicemenuData})
    }).catch(function (e) {
        console.log(e)
    });
});

router.post('/add', function (req, res, next) {
    co(function* () {
        yield practicemenu.create({'name': req.body.name.trim(), 'bigid': req.body.bigid.trim()});
        res.status(200).json({code: 200, msg: '成功'})
    }).catch(function (e) {
        console.log(e)
    });
});

module.exports = router;