const express       = require('express')
const nunjucks      = require('nunjucks')

const { pageHome,
        loginPage,
        signupPage,
        cadastroInvestidor,
        cadastroStartup,
        startups,
        cadastroReuniao,
        buscarReunioes,
        deletarReuniao,
        deletarInvestidor,
        deletarStartup}  = require('./pages')


const server = express()

nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

server.set('view engine', '.njk')

server
.use(express.urlencoded({ extended: true })) // Analisar corpos codificados por URL (sem essa linha não funciona a resposta do post do formulario, 'body{}')
.use(express.json()) //middleware
.use(express.static("public")) //static folder (todos os arquivos estaticos ficarão aqui)

.get("/", pageHome)
.get("/login", loginPage)
.post("/login", loginPage)
.get("/cadastro", signupPage)
.post("/cadastroInvestidor", cadastroInvestidor)
.post("/cadastroStartup", cadastroStartup)
.get("/InvestidorPage", startups)
.get("/deletarInvestidor/:id", deletarInvestidor)
.get("/deletarStartup/:id", deletarStartup)
.get("/deletarReuniao/:id", deletarReuniao)
.get("/startupPage", buscarReunioes)
.post("/reuniao", cadastroReuniao)

.listen(3000, () => {
    console.log(`Servidor rodando no endereço: localhost:${3000}`)
})
