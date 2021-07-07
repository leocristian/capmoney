const database = require('../../../db');
const Startup = require("../../models/StartUp");

async function cadastrarStartup(Name, Email, Password, Site, CNPJ, Anos_de_atuação, Info_sobre_faturamento, Objetivo) {
    try {
        const resultado = await database.sync();
        const newStartup = await Startup.create({
            Nome: Name,
            Email: Email,
            Password: Password, 
            Site: Site, 
            CNPJ: CNPJ, 
            Anos_atuacao: Anos_de_atuação, 
            Faturamento: Info_sobre_faturamento, 
            Objetivo: Objetivo
        })
        console.log("Cadastro Realizado!!");
    } catch (error) {
        console.log(`Erro ao cadastrar: ${error}`);
    }

}

module.exports = cadastrarStartup