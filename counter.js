module.exports = {
  home: (req, res) => {
    res.redirect('/9')
  },
  none: (req, res) => {
    res.render('index', {
      count: 0
    })
  },
  some: (req, res) => {
    res.render('index', {
      count: req.params.count,
      next:  req.params.count - 1
    })
  }
}
