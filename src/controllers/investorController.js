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
    console.log("entrou");
    try {
        const investLogado = await Investidor.findAll({ where: { Nome: Name, Password: Password}})
        console.log(`Usuário logado: ${investLogado.Nome}`)
    } catch (error) {
        console.log(`Erro na busca: ${error}`)
    }
    return investLogado
}

module.exports = cadastrarInvestidor, buscarInvestidor