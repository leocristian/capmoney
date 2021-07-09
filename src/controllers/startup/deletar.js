const database = require('../../../db');
const Startup = require("../../models/StartUp")

async function deletarStartupBD(idParam) {
    console.log("entrou deletar");
    try {
        const resultado = await database.sync();
        await Startup.destroy({ where: { id: idParam} })
        console.log("Startup deletada!!");
    } catch (error) {
        console.log(`Erro ao deletar: ${error}`);
    }
}

module.exports = deletarStartupBD
