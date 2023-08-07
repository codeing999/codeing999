const axios = require("axios");

exports.sendSlack = async (text, color) => {
  // 웹훅 URL
  const SLACK_URL = `${process.env.SLACK_URL}`;
  try {
    const payload = {
      text: `${text}`,
    };

    await axios.post(SLACK_URL, payload);
  } catch (err) {
    logger.error(`sendSlack - error\n: ${err.message}`);
  }
};
/*
exports.sendSlack = async (text, color, title, value, detail) => {
  try {
    const payload = {
      text: `[${process.env.NODE_ENV}] ${text}`,
      attachments: [
        {
          fallback: "",
          color: color,
          fields: [
            {
              title: title,
              value: `${value}${detail !== "" ? `\n SQL : ${detail}` : ""}`,
              short: false,
            },
          ],
          footer: "mopet-node-js-server",
          mrkdwn_in: ["text"],
        },
      ],
    };

    await axios.post(SLACK_URL, payload);
  } catch (err) {
    logger.error(`sendSlack - error\n: ${err.message}`);
  }
};
*/
