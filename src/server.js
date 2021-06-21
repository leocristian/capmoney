const express       = require('express')
const nunjucks      = require('nunjucks');
const { pageHome, loginPage, cadInvestidorPage }  = require('./pages')

const server = express()

nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

server
.use(express.urlencoded()) // Analisar corpos codificados por URL (sem essa linha não funciona a resposta do pot do formulario, 'body{}')
.use(express.json()) //middleware
.use(express.static("public")) //static folder (todos os arquivos estaticos ficaram aqui)

.get("/", pageHome)
.get("/login", loginPage)
.post("/login", loginPage)
.get("/cadastro", cadInvestidorPage)


.listen(3000, () => {
    console.log(`Servidor rodando no endereço: localhost:${3000}`)
})
