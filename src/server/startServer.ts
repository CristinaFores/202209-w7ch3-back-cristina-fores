import app from "./index.js";
import debug from "debug";
import chalk from "chalk";

const startServer = async (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.green(`Server is running on http://localhost:${port}`));
      resolve(server);
    });

    server.on("error", (error) => {
      debug(`There was an error with the server: ${error.message}`);
      reject(error);
    });
  });

export default startServer;
