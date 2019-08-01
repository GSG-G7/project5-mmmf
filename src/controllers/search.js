/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
require('dotenv').config();
const reqPromes = require('request-promise');

exports.post = (req, res) => {
  // eslint-disable-next-line camelcase
  const api_kay = process.env.API_KAY;
  const word = req.body.input;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_kay}&query=${word}&page=1&include_adult=false`;

  reqPromes(url)
    .then((apiRes) => {
      res.send(apiRes);
    })
    .catch(e => console.log(e));
};
