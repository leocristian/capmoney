const database = require('../../../db');
const Investidor = require("../../models/Investidor")

async function buscarInvestidor(Name, Password) {
    console.log("entrou buscar");
    try {
        const resultado = await database.sync();
        const investLogado = await Investidor.findOne({where: { Nome: Name, Password: Password}})
        console.log(JSON.stringify(investLogado))
        return investLogado
    } catch (error) {
        console.log(`Erro na busca: ${error}`)
    }
}

module.exports = buscarInvestidor