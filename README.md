# Express things

In this repo, I practice the basics of Express.

## Node.js
- an application runtime environment that allows you to write server-side applications in javascript
- Javascript that does not depend on a browser

## Express.js
- a framework built on top of node
- the "e" in the MEAN stack

---

## Get started

`index.js`

```js
var express = require("express")
var app = express()

app.listen(4000, function() {
  console.log("app listening on port 4000")
})

// Root route: displays "Hello world"
app.get("/", function(req, res) {
  // Send a string to the response of the GET request.
  res.send("Hello world")
})

// "/:name": displays "Hello <name>"
app.get("/:name", function(req, res) {
  // Send a string to the response of the GET request.
  res.send("Hello " + req.params.name)
})
```

```bash
$ node index.js
```

or

```bash
$ nodemon index.js
```

---

## Client-side view engine Handlebars

```bash
$ npm install --save hbs
```

```js
app.set("view engine", "hbs");
```

---

## Middleware

- code that runs in between receiving the request and responding.

#### Body-parser
- Handles information posted from an html form
- By default express does not have it.

```js
$ npm install --save body-parser
```

```js
...
const bodyParser = require('body-parser')
...
// Handle json post requests.
app.use(bodyParser.json())

// Handle form submissions.
app.use(bodyParser.urlencoded({ extended: true }))
...
```

---

## res.params vs res.body
- Use `res.params` for GET.
- Use `res.body` for POST.

---

## References
- [ga-wdi-lessons/express-intro](https://github.com/ga-wdi-lessons/express-intro)
