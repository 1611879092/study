const express = require('express');
const router = express.Router();
const co = require('co');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Practicemenu = require('../../bin/practicemenu');
const Practicemainmanu = require('../../bin/practicemainmanu');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('admin/practicemainmanu', {title: '材料详情'});
});

router.post('/add', function (req, res, next) {
    co(function* () {
        console.log(req.body);
        const p = yield Practicemenu.findById(req.body.practicemenuId);
        const p1 = yield Practicemainmanu.create({'name': req.body.name.trim()});
        yield p.addPracticemainmanu(p1);
        res.status(200).json({code: 200, msg: '成功'})
    }).catch(function (e) {
        console.log(e)
    });
});

module.exports = router;