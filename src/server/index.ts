import cors from "cors";
import express from "express";

const app = express();
app.use(cors());
app.disable("x-powered-by");
app.use(express.json());

export default app;
