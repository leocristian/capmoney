const Sequelize  = require("sequelize")

const sequelize = new Sequelize({
   dialect: "sqlite",
   storage: "./database2.sqlite" 
});

module.exports = sequelize