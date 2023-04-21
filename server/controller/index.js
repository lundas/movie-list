const models = require('../models');

// write HTTP verb functions heres

module.exports = {
  get: function (req, res) {
    // get movies from db
    console.log(`Received GET Request from ${req.hostname}`);
    models.getAll((err, results) => {
      if (err) {
        // console.log(err);
        res.sendStatus(400);
      } else {
        res.status(200).json(results);
      }
    })
  },
  post: function (req, res) {
    console.log(`Received POST Request from ${req.hostname}`);
    // add movie to db
    // console.log('****Req Body:   ', req.body, '******');
    const movieArgs = [
      req.body.title,
      req.body.rating,
      req.body.release_year,
      req.body.runtime,
      req.body.watched,
      req.body.image
    ]
    models.create(movieArgs, (err, results) => {
      if (err) {
        console.log(err)
        res.sendStatus(400);
      } else {
        res.status(201).json(results);
      }
    })
  },
  put: function (req, res) {
    // toggle watched

  }
}