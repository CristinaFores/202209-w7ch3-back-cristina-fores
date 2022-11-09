import "./loadEnviroment.js";
import startServer from "./server/startServer.js";
import { connectDb } from "./database/index.js";
import debug from "debug";

const { MONGODB_URL: mongoDbUrl, PORT: port } = process.env;

try {
  await startServer(Number(port));
  await connectDb(mongoDbUrl);
} catch (error: unknown) {
  debug(error as string);
}
