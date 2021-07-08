const database = require('../../../db');
const Meeting = require("../../models/Meeting")

async function buscarReuniao(startup_id) {
    console.log("entrou");
    try {
        const resultado = await database.sync();
        const reunioes  = await Meeting.findAll({where: { id: startup_id}})
        console.log(JSON.stringify(reunioes))
        return reunioes
    } catch (error) {
        console.log(`Erro na busca: ${error}`)
    }
}

module.exports = buscarReuniao