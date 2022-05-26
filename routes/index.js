// Routes App

exports.index = function (req, res) {
  res.render('index', {
    title: 'Test Node Developer Zemoga',
    user: req.user
  });
};
