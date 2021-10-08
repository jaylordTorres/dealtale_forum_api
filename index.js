const app = require("./src/config/express");
const { port, env } = require("./src/config/constant");
const db = require("./src/config/db");

async function start() {
  try {
    await db.connect();

    app.listen(port || 3000, () =>
      console.info(`server started: ${port} - ${env}`)
    );
  } catch (e) {
    throw new Error(e.message);
  }
}

start();
