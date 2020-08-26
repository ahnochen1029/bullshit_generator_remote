const express = require('express')
const app = express()
const exphds = require('express-handlebars')
const port = 3000

// setting template engine
app.engine('handlebars', exphds({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

//setting static files
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`The website is http://localhost:${port}`)
})