const Sequelize = require('sequelize');
const sequelize = require("./database");

const Subject = sequelize.define('Subject',{
    'title':{                    //题目名称
        type: Sequelize.STRING
    },
    'option':{                  //题目选项
        type: Sequelize.INTEGER
    },
    'trueoption':{              //正确答案
        type: Sequelize.INTEGER
    },
    'difficulty':{              //难易程度
        type:Sequelize.INTEGER
    }
});

module.exports = Subject;