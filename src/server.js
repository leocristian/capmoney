const express       = require('express')
const nunjucks      = require('nunjucks');
const Startup = require('./models/StartUp');
const { pageHome, loginPage, signupPage, cadastroInvestidor, cadastroStartup, investidorPage,startups }  = require('./pages')



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
.get("/investidorPage", investidorPage)
.get("/startups", startups)

.listen(3000, () => {
    console.log(`Servidor rodando no endereço: localhost:${3000}`)
})
