const cadastrarInvestidor = require("./controllers/investorController")
const buscarInvestidor = require("./controllers/investorController")

const cadastrarStartup = require("./controllers/startupController")


function pageHome(req, res) {
  return res.render("index.html")
}
// Função para verificar se o usuário está cadastrado

function verificaUser(InvestidorArray, StartUpArray, key) {
  var array = InvestidorArray.concat(StartUpArray);
  console.log('array=',array);
  console.log('key=',String(key.Username));
  
 
    var result = element=> element.Nome == String(key.Username) 
    return (array.some(result)) //Dica @charles rosa
  
}

function loginPage(req, res) {
  if (req.method == "POST"){
    const { username, passwd } = req.body
    console.log('req.body ==',req.body);

    // Verificar se a informação "username" está cadastrada no banco de dados
    // Se sim, entra no sistema.
    // Se não, mostra mensagem de "Usuário não cadastrado"
  
    const userObj = {
      "Username": username,
      "Password": passwd
    }

    // Deve verificar se o usuário informado no login está cadastrado no banco de dados
    const result = buscarInvestidor(userObj.Username, userObj.passwd)
    console.log(result)

    if (result) {
      console.log(`Usuário ${userObj.Username} encontrado!!`)
      return res.send('<script>location.href="/"</script>')
      
    } else {
      // res.send('<script>alert("Usuario não cadastrado!"); location.href="/" </script>')
      console.log(`Usuário ${userObj.Username} NÂO cadastrado!!`)
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