class StartUp{
    constructor(Nome, Email, Password, Site, CNPJ, Anos_de_atuação, Info_sobre_faturamento, Objetivo) {  
        this.Nome = Nome 
        this.Email = Email 
        this.Password = Password 
        this.Site = Site 
        this.CNPJ = CNPJ 
        this.Anos_de_atuação = Anos_de_atuação 
        this.Info_sobre_faturamento = Info_sobre_faturamento //informações sobre o crescimento da empresa 
        this.Objetivo = Objetivo  //(para quê ela usaria o dinheiro investido e o que ela oferece em troca (%)), Porcentagem oferecida. 

    }
}

module.exports = StartUp