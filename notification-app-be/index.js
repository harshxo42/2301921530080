const { Log, setToken } = require("../logging-middleware");

async function main() {
  const token = process.env.EVALUATION_TOKEN || "";

  if (!token) {
    console.warn("EVALUATION_TOKEN is not set. Logging may fail without a valid token.");
  }

  setToken(token);
  await Log("backend", "info", "handler", "Request received");
}

main().catch((err) => {
  console.error("Error in logging example:", err);
});
