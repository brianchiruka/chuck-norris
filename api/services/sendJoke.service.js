const axios = require("axios");

exports.sendJoke = async (joke) => {
  axios
    .post(
      "https://hooks.slack.com/services/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",
      {
        text: joke,
      }
    )
    .then((resp) => console.log(resp.data))
    .catch((err) => console.error(err));
};
