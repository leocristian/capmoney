const Sequelize = require("sequelize")
const database = require("../../db")


const Investidor = database.define("Investidor", {
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
    Bio: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// class Investidor{
//     constructor(Nome, Email, Password, bio, level){
//         this.Nome = Nome 
//         this.Email = Email 
//         this.Password = Password 
//         this.bio = bio
//         this.level = level //começa em 1

//     }
// }

module.exports = Investidor