const Sequelize = require("sequelize")
const database = require("../../db")


const Startup = database.define("Startup", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    Nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Site: {
        type: Sequelize.STRING,
        allowNull: false
    },
    CNPJ: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Anos_atuacao: {
        type: Sequelize.DATE
    },
    Faturamento: {
        type: Sequelize.FLOAT
    }, 
    Objetivo: {
        type: Sequelize.TEXT
    }
})

module.exports = Startup