const axios = require("axios");

exports.fetchJoke = async (req, res) =>
  await axios
    .get("https://api.chucknorris.io/jokes/random")
    .then((res) => res.data.value)
    .catch((err) => {
      console.error(err);
    });
