const database = require('../../db');
const Startup = require("../models/StartUp")
 
module.exports = async function cadastrarStartup(Name, Email, Password, Site, CNPJ, Anos_de_atuação, Info_sobre_faturamento, Objetivo) {
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

module.exports = async function buscarStartup(Name, Password) {
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