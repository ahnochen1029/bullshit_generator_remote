const express = require('express')
const app = express()
const exphds = require('express-handlebars')
const bodyParser = require('body-parser')
const hbsHelpers = require('handlebars-helpers')
const generateTrash = require('./generator')
const port = 3000

// setting template engine
app.engine('handlebars', exphds({ defaultLayout: 'main', helpers: hbsHelpers() }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const job = req.body.jobs
  const trash = generateTrash(req.body)
  res.render('index', { trash, job })
})

//setting static files
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`The website is http://localhost:${port}`)
})