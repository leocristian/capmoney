const cadastrarInvestidor = require("./controllers/investor/cadastrar")
const buscarInvestidor = require("./controllers/investor/buscar")
const deletarInvestidorBD = require("./controllers/investor/deletar")

const cadastrarStartup = require("./controllers/startup/cadastrar")
const buscarStartup = require("./controllers/startup/buscar")
const deletarStartupBD = require("./controllers/startup/deletar")

const cadastrarReuniao = require("./controllers/reuniao/cadastrar")
const buscarReuniao = require("./controllers/reuniao/buscar")
const deletarReuniaoBD = require('./controllers/reuniao/deletar');

const Investidor = require("./models/Investidor")
const Startup = require("./models/StartUp")
const Meeting = require("./models/Meeting")

function pageHome(req, res) {
  return res.render("index.html")
}  

function sobre(req, res) {
  return res.render("sobre.html")
}  

function ajuda(req, res) {
  return res.render("ajuda.html")
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
        var user_encrypted = Buffer.from(username).toString('base64')
        return res.redirect('investidorPage?u=' + user_encrypted)
        
   
      } else if (result instanceof Startup) {
        console.log('USUÁRIO É UMA STARTUP');
        var user_encrypted = Buffer.from(username).toString('base64')
        return res.redirect('startupPage?u=' + user_encrypted)
      }
      console.log(`Usuário ${result} encontrado!!`)
      return res.send('<script>alert("Usuario cadastrado!"); location.href="/login"</script>')
      
    } else {
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
  var investidor = Buffer.from(req.query.u, 'base64').toString();
  var startup = Buffer.from(req.query.u, 'base64').toString();
  const investLogado = await Investidor.findOne({where: {Nome:investidor}});
  const startupLogada = await Startup.findOne({where: {Nome:startup}});

  if(investLogado){
    let startups = await Startup.findAll()
    let reunioes = await Meeting.findAll({ where: { idInvestor: investLogado.id} })
    return res.render("investidorPage", {startups: startups,investLogado, reunioes})
    
  }
  else return res.send('<script>alert("Voce não tem acesso a essa pagina"); location.href="/login"</script>')

}

async function cadastroInvestidor(req, res) {
  if (req.method == "POST") {
    console.log("log==",req.body);

    const { Name, Email, Password, Biografia} = req.body
    
    await cadastrarInvestidor(Name, Email, Password, Biografia)
  
    return res.redirect("/login")
  }
  return res.render("signupPage.html")
}

async function cadastroStartup(req, res) {
  if (req.method == "POST") {
    const { nome, Email, Password, Site, CNPJ, Anos_de_atuação, Info_sobre_faturamento, Objetivo} = req.body
    
    await cadastrarStartup(nome, Email, Password, Site, CNPJ, Anos_de_atuação, Info_sobre_faturamento, Objetivo)

    return res.redirect("/login")

  }
  return res.render("signupPage.html")
}

async function cadastroReuniao(req, res) {
  if (req.method == "POST") {
    console.log("req body: " + JSON.stringify(req.body))
    const { url, data, startup_id, investidor_id } = req.body

    try {
      await cadastrarReuniao(url, data, startup_id, investidor_id)
      const investLogado = await Investidor.findOne({where: {id:investidor_id}});
      var user_encrypted = Buffer.from(investLogado.Nome).toString('base64')
      
      return res.redirect('investidorPage?u=' + user_encrypted)
      // .send('<script>alert("Reunião Agendada!")</script>')
      // return res.send("<script> alert('Reunião Agendada!'); location.href=http://localhost:3000/investidorPage?u="+user_encrypted+"#;</script>")
      
    } catch (error) {
      console.log(`Erro ao cadastrar: ${error}`)
      return res.send('<script>alert("Erro ao agendar reunião!"); location.href="http://localhost:3000"</script>')
    }

  }
}

async function buscarReunioes(req, res) {
  console.log(JSON.stringify(req.body))
  var startup = Buffer.from(req.query.u, 'base64').toString();
  const startupLogada = await Startup.findOne({where: {Nome:startup}});
  console.log("StartupLogada: " + startupLogada)
  let reunioes = await buscarReuniao(startupLogada.id)

  console.log("REUNIOES: " + reunioes)

  if(startupLogada){

    let startups = await Startup.findAll()
    let reunioes = await Meeting.findAll({ where: { idStartup: startupLogada.id} })
  return res.render("startupPage", {reunioes,startups: startups, reunioes, startupLogada})
  }
  else return res.send('<script>alert("Voce não tem acesso a essa pagina"); location.href="#"</script>')
}

async function deletarInvestidor(req, res) {
  console.log("DELETANDO CONTA INVESTIDOR----------------");

  try {
    await deletarInvestidorBD(req.params.id)
    return res.send('<script>alert("Conta deletada com sucesso!"); location.href="/login"</script>')
  } catch (error) {
    return res.send("Erro ao deletar conta: " + error)
  }
  
}

async function deletarStartup(req, res) {
  try {
    await deletarStartupBD(req.params.id)
    return res.send('<script>alert("Conta deletada com sucesso!"); location.href="/login"</script>')
  } catch (error) {
    return res.send("Erro ao deletar conta: " + error)
  }
}

async function deletarReuniao(req, res) {
  console.log("entrou deletar reuniao")
  try {
    await deletarReuniaoBD(req.params.id)
    return res.send("Reunião deletada!!")
  } catch (error) {
    return res.send("Erro ao deletar reuniao: " + error)   
  }
}

async function filtrarStartups(req, res) {
  
  const { filtro } = req.body
  let startupsFiltradas = await Startup.findAll({ where: { Nome: filtro} })

  console.log(startupsFiltradas)
  return res.render("filtroStartups", {startupsFiltradas})
}

module.exports = {
  pageHome,
  loginPage,
  signupPage,
  cadastroInvestidor,
  cadastroStartup,
  startups,
  cadastroReuniao,
  buscarReunioes,
  deletarReuniao,
  deletarInvestidor,
  deletarStartup,
  sobre,
  ajuda,
  filtrarStartups
}
