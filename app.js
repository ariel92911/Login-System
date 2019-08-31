// app.js
// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const loginSystem = require('./login_system')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const loginResult = loginSystem(req.body)

  if (loginResult.includes('Welcome')) {
    res.render('welcomepage', { loginResult })
  } else {
    res.render('index', { loginResult, options })
  }

})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on localhost:${port}.`)
})