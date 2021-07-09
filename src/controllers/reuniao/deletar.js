const database = require('../../../db');
const Meeting = require("../../models/Meeting")

async function deletarReuniao(idParam) {
    console.log("entrou deletar");
    try {
        const resultado = await database.sync();
        const meeting = await Meeting.destroy({ where: { id: idParam} })
        console.log("Meeting deletada!!");
    } catch (error) {
        console.log(`Erro ao deletar: ${error}`);
    }
}

module.exports = deletarReuniao
