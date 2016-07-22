const express = require('express')
const app = express()

const listener = app.listen(4000, () => {
  console.log(`app listening on port ${listener.address().port}`)
})

// Set Handlebars as a view engine.
app.set('view engine', 'hbs')

// Serve static content from the `public` directory.
app.use(express.static('public'))

// Routes.
app.get('/', (req, res) => {
  res.redirect('/9')
})
app.get('/:count', (req, res) => {
  const count = req.params.count || 9
  const next = count - 1;

  // Render a view instead of sending a string directly to the response.
  if (count > 1) {
    res.render('index', {
      count: next
    })
  } else {
    res.render('index', {
      count: 0
    })
  }
})
