const Sequelize = require("sequelize")
const database = require("../../db")


const Meeting = database.define("Meeting", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    URL: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Data: {
        type: Sequelize.DATE,
        allowNull: false
    },
    IdStartup: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    IdInvestor: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Meeting