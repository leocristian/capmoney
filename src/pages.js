const cadastrarInvestidor = require("./controllers/investorController")
const buscarInvestidor = require("./controllers/investorController")
const cadastrarStartup = require("./controllers/startupController")


function pageHome(req, res) {
  return res.render("index.html")
}

async function loginPage(req, res) {
  if (req.method == "POST"){
    const { username, passwd } = req.body
    console.log('req.body ==',req.body);

    // Deve verificar se o usuário informado no login está cadastrado no banco de dados
    
    let result = buscarInvestidor(username, passwd)
    console.log(`Resultado: ${result.Nome}`)

    if (result) {
      console.log(`Usuário ${result.Nome} encontrado!!`)
      return res.send('<script>location.href="/"</script>')
      
    } else {
      // res.send('<script>alert("Usuario não cadastrado!"); location.href="/" </script>')
      console.log(`Usuário ${result.Nome} NÂO cadastrado!!`)
      return res.send('<script>alert("Usuario não cadastrado!"); location.href="/login"</script>')
    }
  
  }
  return res.render("loginPage.html")
}

function signupPage(req, res) { 
  return res.render("signupPage.html")
}

function cadastroInvestidor(req, res) {
  if (req.method == "POST") {

    const { Name, Email, Password, Biografia} = req.body
  
    cadastrarInvestidor(Name, Email, Password, Biografia)
  
    return res.redirect("/")
  }
  return res.render("signupPage.html")
}

function cadastroStartup(req, res) {
  if (req.method == "POST") {
    const { nome, Email, Password, Site, CNPJ, Anos_de_atuação, Info_sobre_faturamento, Objetivo} = req.body
    
    cadastrarStartup(nome, Email, Password, Site, CNPJ, Anos_de_atuação, Info_sobre_faturamento, Objetivo)

    return res.redirect("/")

  }
  return res.render("signupPage.html")
}

module.exports = {
  pageHome,
  loginPage,
  signupPage,
  cadastroInvestidor,
  cadastroStartup
}