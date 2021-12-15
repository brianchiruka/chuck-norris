const { fetchJoke, sendJoke } = require("../services/index");

exports.jokeHandler = async (req, res) => {
  const joke = await fetchJoke(req, res);
  sendJoke(joke);
  return joke;
};
