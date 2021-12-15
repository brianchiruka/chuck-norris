const { sendJoke, fetchJoke } = require("../services/index");

exports.jokeHandler = async (req, res) => {
  const joke = await fetchJoke(req, res);
  sendJoke(joke);
  res.send(joke);
  return joke;
};
