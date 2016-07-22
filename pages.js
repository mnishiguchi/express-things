module.exports = {
  welcome: (req, res) => {
    res.render('welcome', {})
  },
  home: (req, res) => {
    res.render('index', {
      player_name: req.body.player_name,
      count: 9,
      next: 8
    })
  },
  some: (req, res) => {
    res.render('index', {
      count: req.params.count,
      next:  req.params.count - 1
    })
  },
  none: (req, res) => {
    res.render('index', {
      count: 0
    })
  }
}
