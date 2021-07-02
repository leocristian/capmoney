
async function cadastrarInvestidor(Name, Email, Password, Biografia) {
    const database = require('../../db');
    const Investidor = require("../models/Investidor")
     
    try {
        const resultado = await database.sync();
        const newInvestidor = await Investidor.create({Nome: Name, Email: Email, Password: Password, Bio:Biografia})
        console.log("Cadastro Realizado!!");
    } catch (error) {
        console.log(`Erro ao cadastrar: ${error}`);
    }

}

function buscarInvestidor(id) {
    
}

module.exports = cadastrarInvestidor