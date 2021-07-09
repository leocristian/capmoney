const cadastrarInvestidor = require("./controllers/investor/cadastrar")
const buscarInvestidor = require("./controllers/investor/buscar")

const cadastrarStartup = require("./controllers/startup/cadastrar")
const buscarStartup = require("./controllers/startup/buscar")

const cadastrarReuniao = require("./controllers/reuniao/cadastrar")
const buscarReuniao = require("./controllers/reuniao/buscar")

const Investidor = require("./models/Investidor")
const Startup = require("./models/StartUp")
const Meeting = require("./models/Meeting")
// const { response } = require("express")

function pageHome(req, res) {
  return res.render("index.html")
}  


// async function Verifica_Usuario_Cadastrado_BD(req){
//   const { username, passwd } = req.body
//     console.log('req.body ==',req.body);

//     // Deve verificar se o usuário informado no login está cadastrado no banco de dados
//     let result = await buscarInvestidor(username, passwd)
//     if (result == undefined) result = await buscarStartup(username, passwd)
    
//     if (result != undefined && result.Nome === username && result.Password === passwd) {
//       if (result instanceof Investidor){
//         return [true,'I',result]
//       } else if (result instanceof Startup) {
//         return [true,'S',result]
//       }     
//     } else {
//       return [false,'',result]
//     }
// }
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
  var investidor = Buffer.from(req.query.u, 'base64').toString();
  const investLogado = await Investidor.findOne({where: {Nome:investidor}});

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

  return res.render("startupPage", {reunioes: reunioes, startupLogada})
  }
  else return res.send('<script>alert("Voce não tem acesso a essa pagina"); location.href="#"</script>')
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
}
