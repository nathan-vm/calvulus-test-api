import express, { type Request, type Response } from "express";
import config from "../config";

const app = express();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.json({ msg: "OK" });
});

app.listen(config.PORT, () => {
  console.info(`Listen in: http://localhost:${config.PORT}/`);
});
