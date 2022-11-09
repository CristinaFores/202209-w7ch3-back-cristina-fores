import dotenv from "dotenv";

dotenv.config();

const { DEBUG: debug, MONGODB_URL: mongoDbUrl, PORT: port } = process.env;

export default { debug, mongoDbUrl, port };
