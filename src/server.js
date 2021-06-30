const express       = require('express')
const nunjucks      = require('nunjucks');
const { pageHome, loginPage, signupPage, cadastroInvestidor, cadastroStartup }  = require('./pages')

const server = express()

nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

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


.listen(3000, () => {
    console.log(`Servidor rodando no endereço: localhost:${3000}`)
})
