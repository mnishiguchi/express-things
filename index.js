var express = require("express")
var app = express()

app.listen(4000, function() {
  console.log("app listening on port 4000")
})

// Root route: displays "Hello world"
app.get("/", function(req, res) {
  res.send("Hello world")
})

// "/:name": displays "Hello <name>"
app.get("/:name", function(req, res) {
  res.send("Hello " + req.params.name)
})
