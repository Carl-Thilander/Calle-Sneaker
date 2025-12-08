import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "./prisma/schema.prisma",
  datasource: {
    // Viktigt: Mongo använder `url` här, inte i schema.prisma
    url: env("DATABASE_URL"),
  },
  migrations: {
    seed: `tsx prisma/seed`,
  },
});
