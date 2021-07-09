const database = require('../../../db');
const Startup = require("../../models/Startup")

async function deletarStartup(idParam) {
    console.log("entrou deletar");
    try {
        const resultado = await database.sync();
        const startup = await Startup.destroy({ where: { id: idParam} })
        console.log("Startup deletada!!");
    } catch (error) {
        console.log(`Erro ao deletar: ${error}`);
    }
}

module.exports = deletarStartup
