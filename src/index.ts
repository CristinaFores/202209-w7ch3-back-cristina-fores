import "./loadEnviroment.js";
import { connectDb } from "./database/index.js";
import startServer from "./server/startServer.js";
import debug from "debug";

const { MONGODB_URL: mongoDbUrl, PORT: port } = process.env;

await connectDb(mongoDbUrl);

try {
  await startServer(Number(port));
} catch (error: unknown) {
  debug(error);
}
