import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = Bun.env.DB_URL ?? Bun.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DB_URL (or DATABASE_URL) must be set before using PrismaClient");
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const db = new PrismaClient({ adapter });
