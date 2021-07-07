const database = require('../../../db');
const Investidor = require("../../models/Investidor")

async function cadastrarInvestidor(Name, Email, Password, Biografia) {
    console.log("entrou cadastrar");
    try {
        const resultado = await database.sync();
        const newInvestidor = await Investidor.create({Nome: Name, Email: Email, Password: Password, Bio:Biografia})
        console.log("Cadastro Realizado!!");
    } catch (error) {
        console.log(`Erro ao cadastrar: ${error}`);
    }
}

module.exports = cadastrarInvestidor
