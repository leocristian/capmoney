
function pageHome(req, res) {
  return res.render("index.html")
}

function loginPage(req, res) {
  if (req.method == "POST"){
    return console.log(req.body)
  }
  return res.render("loginPage.html")
}

function cadInvestidorPage(req, res) {
  if (req.method == "POST") {
    return console.log(req.body)
  }
  return res.render("cadInvestidorPage.html")
}


module.exports = {
  pageHome,
  loginPage,
  cadInvestidorPage
}