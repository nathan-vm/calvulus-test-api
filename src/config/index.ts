import { config } from "dotenv";

config();

export default {
  PORT: process.env.PORT ?? 8000,
  NODE_ENV: process.env.NODE_ENV ?? "development",
};
