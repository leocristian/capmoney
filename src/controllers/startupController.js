const Startup = require("../models/StartUp")

const StartUpArray = []

function cadastrarStartup(nome, Email, Password, Site, CNPJ, Anos_de_atuação, Info_sobre_faturamento, Objetivo) {
    const newStartup = new Startup(nome, Email, Password, Site, CNPJ, Anos_de_atuação, Info_sobre_faturamento, Objetivo);
    StartUpArray.push(newStartup)

    console.table(StartUpArray)
}

function buscarStartup(id) {
    
}

module.exports = cadastrarStartup