/* eslint-disable prettier/prettier */
import 'dotenv/config'
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    // url: env("DATABASE_URL"),
    url: process.env.DATABASE_URL!
  },
});
