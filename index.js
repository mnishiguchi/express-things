const express = require('express')
const app = express()

const counter = require('./counter')

// Set Handlebars as a view engine.
app.set('view engine', 'hbs')

// Serve static content from the `public` directory.
app.use(express.static('public'))

// Routes.
app.get('/', counter.home)
app.get('/0', counter.none)
app.get('/:count', counter.some)

// Listen.
const listener = app.listen(4000, () => {
  console.log(`app listening on port ${listener.address().port}`)
})
