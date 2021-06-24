
const StartUp = require("./models/StartUp")
const Investor = require("./models/Investor"
)
const investorArray = []

function pageHome(req, res) {
  return res.render("index.html")
}

function loginPage(req, res) {
  if (req.method == "POST"){
    const { username, passwd } = req.body

    // Verificar se a informação "username" está cadastrada no banco de dados
    // Se sim, entra no sistema.
    // Se não, mostra mensagem de "Usuário não cadastrado"
  
    const userObj = {
      "Username": username,
      "Password": passwd
    }
  
    res.redirect("/")
    return console.log(`Usuário logado: ${username}`)
  }
  return res.render("loginPage.html")
}

function cadInvestidorPage(req, res) {
  if (req.method == "POST") {
    const { username, email, passwd} = req.body
    
    // Dado que seria cadastrado no banco de dados
    const newInvestor = new Investor(username, email, "blablabla", 2)
    
    // Lógica para cadastrar no banco de dados (obs. Controller é o responsável por isso)
    investorArray.push(newInvestor) // Equivalente a "INSERT INTO investidores VALUES (username, email, passwd)"

    console.log(`Usuário ${username} cadastrado com sucesso!!`)
    
    res.redirect("/")
    console.log("Lista de usuários:")
    return console.log(investorArray)
  }
  return res.render("cadInvestidorPage.html")
}

module.exports = {
  pageHome,
  loginPage,
  cadInvestidorPage
}