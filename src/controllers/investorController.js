const database = require('../../db');
const Investidor = require("../models/Investidor")

module.exports = async function cadastrarInvestidor(Name, Email, Password, Biografia) {
    
    try {
        const resultado = await database.sync();
        const newInvestidor = await Investidor.create({Nome: Name, Email: Email, Password: Password, Bio:Biografia})
        console.log("Cadastro Realizado!!");
    } catch (error) {
        console.log(`Erro ao cadastrar: ${error}`);
    }
}

module.exports = async function buscarInvestidor(Name, Password) {
    console.log("entrou");
    try {
        const resultado = await database.sync();
        const investLogado = await Investidor.findOne({where: { Nome: Name, Password: Password}})
        console.log(JSON.stringify(investLogado))
        return investLogado
    } catch (error) {
        console.log(`Erro na busca: ${error}`)
    }
}