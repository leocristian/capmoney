const express = require('express')
const server = express()

const hostname = "localhost"
const port = 3000

server.use(express.json())

server.route('/login')
    .get((request, response) => {
        response.sendFile(__dirname + "/views/loginPage/index.html")
})
    .post((request, response) => {
    console.log(request.body)
})

server.route('/cadInvestidor')
    .get((request, response) => {
    response.sendFile(__dirname + "/views/cadInvestidorPage/index.html")
})



server.listen(port, () => {
    console.log(`Servidor rodando no endereço: ${hostname}:${port}`)
})