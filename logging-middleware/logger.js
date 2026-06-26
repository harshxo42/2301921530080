const axios = require("axios");
let token = "";

function setToken(accessToken) {
  token = accessToken;
}

async function Log(stack, level, pkg, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}

module.exports = {
  Log,
  setToken,
};
