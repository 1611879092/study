const Sequelize = require('sequelize');
const sequelize = require("./database");

const Practicemainmanu = sequelize.define('Practicemainmanu',{
    'name':{                    //分类名称
        type: Sequelize.STRING
    }
});

module.exports = Practicemainmanu;