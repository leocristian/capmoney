const Sequelize = require("sequelize")
const database = require("../../db")


const Encontro = database.define("Encontro", {
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
    Hora: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    IdInvestor: {
        allowNull: false
    },
    IdStartup: {
        allowNull: false
    }
})

module.exports = Encontro