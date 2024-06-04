import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/database/schemas/*",
  dialect: "postgresql",
  out: "./src/database/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
