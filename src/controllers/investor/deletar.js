const database = require('../../../db');
const Investidor = require("../../models/Investidor")

async function deletarInvestidor(idParam) {
    console.log("entrou deletar");
    try {
        const resultado = await database.sync();
        const investidor = await Investidor.destroy({ where: { id: idParam} })
        console.log("Investidor deletado!!");
    } catch (error) {
        console.log(`Erro ao deletar: ${error}`);
    }
}

module.exports = deletarInvestidor
