const database = require('../../../db');
const Startup = require("../../models/StartUp")

async function buscarStartup(Name, Password) {
    console.log("entrou");
    try {
        const resultado = await database.sync();
        const startupLogada = await Startup.findOne({where: { Nome: Name, Password: Password}})
        console.log(JSON.stringify(startupLogada))
        return startupLogada
    } catch (error) {
        console.log(`Erro na busca: ${error}`)
    }
}

module.exports = buscarStartup