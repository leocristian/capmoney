const StartUp = require("./models/StartUp")
const Investidor = require("./models/Investidor")

const StartUpArray = []
const InvestidorArray = []

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
    const result = verificaUser(InvestidorArray, StartUpArray, userObj)
    // console.log(result) //== undefined

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
  console.log('req.body->',req.body,req.method)
  if (req.method == "POST") {

    const { Name, Email, Password, Biografia} = req.body
    
    // Dado que seria cadastrado no banco de dados
    const newInvestidor = new Investidor(Name, Email, Password, Biografia, 1)
    
    // Lógica para cadastrar no banco de dados (obs. Controller é o responsável por isso)
    InvestidorArray.push(newInvestidor) // Equivalente a "INSERT INTO investidores VALUES (username, email, passwd)"

    console.log(`Usuário ${Name} cadastrado com sucesso!!`)
    
    res.redirect("/")
    console.log("Lista de usuários Investidores:")
    return console.log(InvestidorArray)
  }
  return res.render("signupPage.html")
}

function cadastroStartup(req, res) {
  if (req.method == "POST") {
    const { nome, Email, Password, Site, CNPJ, Anos_de_atuação, Info_sobre_faturamento, Objetivo} = req.body
    console.log('req.body->',req.body)
    // Dado que seria cadastrado no banco de dados
    const newStartup = new StartUp(nome, Email, Password, Site, CNPJ, Anos_de_atuação, Info_sobre_faturamento, Objetivo)
    
    // Lógica para cadastrar no banco de dados (obs. Controller é o responsável por isso)
    StartUpArray.push(newStartup) // Equivalente a "INSERT INTO investidores VALUES (username, email, passwd)"

    console.log(`Usuário ${nome} cadastrado com sucesso!!`)
    
    res.redirect("/")
    console.log("Lista de usuários Startus:")
    return console.log(StartUpArray)
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