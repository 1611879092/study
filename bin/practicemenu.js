const Sequelize = require('sequelize');
const sequelize = require("./database");

const Practicemenu = sequelize.define('Practicemenu',{
    'name':{                    //分类名称
        type: Sequelize.STRING
    },
    'bigid':{
        type: Sequelize.INTEGER
    }
});

module.exports = Practicemenu;