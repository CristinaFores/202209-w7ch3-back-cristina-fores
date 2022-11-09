import debugConfig from "debug";
import chalk from "chalk";
import app from "./index.js";

const debug = debugConfig("items:root");

const startServer = async (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.magenta(`Server is running on http://localhost:${port}`));
      resolve(server);
    });

    server.on("error", (error) => {
      debug(`There was an error with the server: ${error.message}`);
      reject(error);
    });
  });

export default startServer;
