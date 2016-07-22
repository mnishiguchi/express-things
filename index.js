const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const pages = require('./pages')

// Set Handlebars as a view engine.
app.set('view engine', 'hbs')

// Serve static content from the `public` directory.
app.use(express.static('public'))

// Handle json post requests.
app.use(bodyParser.json())

// Handle form submissions.
app.use(bodyParser.urlencoded({ extended: true }))

// Routes.
app.get('/', pages.welcome)
app.post('/', pages.home)
app.get('/0', pages.none)
app.get('/:count', pages.some)

// Listen.
const listener = app.listen(4000, () => {
  console.log(`app listening on port ${listener.address().port}`)
})
