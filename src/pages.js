const StartUp = require("./models/StartUp")
const Investidor = require("./models/Investidor")
const InvestidorArray = []

function pageHome(req, res) {
  return res.render("index.html")
}

// Função para verificar se o usuário está cadastrado
function verificaUser(array, key) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element.name == key) {
      return true
    } else {
      return false
    } 
  }
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
    console.log(userObj.Username)

    // Deve verificar se o usuário informado no login está cadastrado no banco de dados
    const result = verificaUser(InvestidorArray, userObj.Username)

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
  if (req.method == "POST") {
    const { username, email, passwd} = req.body
    
    // Dado que seria cadastrado no banco de dados
    const newInvestidor = new Investidor(username, email, "blablabla", 2)
    
    // Lógica para cadastrar no banco de dados (obs. Controller é o responsável por isso)
    InvestidorArray.push(newInvestidor) // Equivalente a "INSERT INTO investidores VALUES (username, email, passwd)"

    console.log(`Usuário ${username} cadastrado com sucesso!!`)
    
    res.redirect("/")
    console.log("Lista de usuários:")
    return console.log(InvestidorArray)
  }
  return res.render("signupPage.html")
}

module.exports = {
  pageHome,
  loginPage,
  signupPage
}