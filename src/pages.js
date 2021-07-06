const cadastrarInvestidor = require("./controllers/investor/cadastrar")
const buscarInvestidor = require("./controllers/investor/buscar")

const cadastrarStartup = require("./controllers/startup/cadastrar")
const buscarStartup = require("./controllers/startup/buscar")

const Investidor = require("./models/Investidor")
const Startup = require("./models/StartUp")

function pageHome(req, res) {
  return res.render("index.html")
}

async function loginPage(req, res) {
  if (req.method == "POST"){
    const { username, passwd } = req.body
    console.log('req.body ==',req.body);

    // Deve verificar se o usuário informado no login está cadastrado no banco de dados
    let result = await buscarInvestidor(username, passwd)
    console.log(`Resultado: ${result}`)

    if (result == undefined) {
      result = await buscarStartup(username, passwd)
    }

    console.log(`Resultado: ${result}`)
 
    if (result != undefined && result.Nome === username && result.Password === passwd) {
      if (result instanceof Investidor){
        console.log('USUÁRIO É UM INVESTIDOR');
        // return res.render("/startups")
      } else if (result instanceof Startup) {
        console.log('USUÁRIO É UMA STARTUP');
      }
      console.log(`Usuário ${result} encontrado!!`)
      return res.send('<script>alert("Usuario cadastrado!"); location.href="/login"</script>')
      
    } else {
      // res.send('<script>alert("Usuario não cadastrado!"); location.href="/" </script>')
      console.log(`Usuário ${result} NÂO cadastrado!!`)
      return res.send('<script>alert("Usuario não cadastrado!"); location.href="/login"</script>')
    }
  
  }
  return res.render("loginPage.html")
}

function signupPage(req, res) { 
  return res.render("signupPage.html")
}

async function startups(req, res) {
  await Startup.findAll().then(function (startups) {
    res.render("startups", {startups: startups})
  })
}

async function cadastroInvestidor(req, res) {
  if (req.method == "POST") {

    const { Name, Email, Password, Biografia} = req.body
    
    await cadastrarInvestidor(Name, Email, Password, Biografia)
  
    return res.redirect("/")
  }
  return res.render("signupPage.html")
}

async function cadastroStartup(req, res) {
  if (req.method == "POST") {
    const { nome, Email, Password, Site, CNPJ, Anos_de_atuação, Info_sobre_faturamento, Objetivo} = req.body
    
    await cadastrarStartup(nome, Email, Password, Site, CNPJ, Anos_de_atuação, Info_sobre_faturamento, Objetivo)

    return res.redirect("/")

  }
  return res.render("signupPage.html")
}

module.exports = {
  pageHome,
  loginPage,
  signupPage,
  cadastroInvestidor,
  cadastroStartup,
  startups
}