const database = require('../../../db');
const Meeting = require("../../models/Meeting");

async function cadastrarReuniao(url, data, startup_id, investidor_id) {
    try {
        const resultado = await database.sync();
        const newMeeting = await Meeting.create({
            URL: url,
            Data: data,
            IdStartup: startup_id,
            IdInvestor: investidor_id
        })
        console.log("Cadastro Realizado!!");
    } catch (error) {
        console.log(`Erro ao cadastrar: ${error}`);
    }

}

module.exports = cadastrarReuniao