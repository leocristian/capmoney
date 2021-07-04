const database = require('../../db');
const Investidor = require("../models/Investidor")

async function cadastrarInvestidor(Name, Email, Password, Biografia) {
     
    try {
        const resultado = await database.sync();
        const newInvestidor = await Investidor.create({Nome: Name, Email: Email, Password: Password, Bio:Biografia})
        console.log("Cadastro Realizado!!");
    } catch (error) {
        console.log(`Erro ao cadastrar: ${error}`);
    }

}

async function buscarInvestidor(Name, Password) {
    const investLogado = await Investidor.findAll({ where: { Nome: Name, Password: Password}})

    return investLogado
}

module.exports = cadastrarInvestidor, buscarInvestidor