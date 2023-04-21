const db = require('../db');

// write sql queries here

module.exports = {
  getAll: function (callback) {
    // getAll entries in movies db
    db.connection.query(
      'SELECT * FROM `movies`',
      (err, results, fields) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      }
    )
  },
  create: function (movieArgs, callback) {
    // add an entry to the movies db
    // movieArgs should be passed as an array in the order
    // title:string, rating:string, release_year:4digyear, runtime:min, watched:bool, image:url
    db.connection.query(
      'INSERT INTO `movies` (`title`, `rating`, `release_year`, `runtime`, `watched`, `image`) VALUES (?, ?, ?, ?, ?, ?)',
      movieArgs,
      (err, results, fields) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      });
  },
  update: function (title, isWatched, callback) {
    // update the watched column for a movie in db
    // isWatched should be pulled from the request
    // set watchValue based on isWatched
    let watchValue = isWatched ? 1 : 0;
    db.connection.query(
      'UPDATE `movies` SET `watched` = ? WHERE title = ?',
      [watchValue, title],
      (err, results, fields) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      }
    )
  }
};