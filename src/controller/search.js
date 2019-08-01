
require('dotenv').config();
const reqPromes = require('request-promise');

exports.post = (req, res) => {
  const apikay = process.env.API_KAY;
  const word = req.body.input;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apikay}&query=${word}&page=1&include_adult=false`;

  reqPromes(url)
    .then((apiRes) => {
      res.send(apiRes);
    });
};
