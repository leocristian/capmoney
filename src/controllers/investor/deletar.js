const database = require('../../../db');
const Investidor = require("../../models/Investidor")

async function deletarInvestidorBD(idParam) {
    console.log("entrou deletar");
    try {
        const resultado = await database.sync();
         await Investidor.destroy({ where: { id: idParam} })
        console.log("Investidor deletado!!");
    } catch (error) {
        console.log(`Erro ao deletar: ${error}`);
    }
}

module.exports = deletarInvestidorBD
