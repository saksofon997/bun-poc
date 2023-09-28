import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const migrationClient = postgres(Bun.env.DB_URL, { max: 1 });

export const doMigrations = () => {
  return migrate(drizzle(migrationClient), {
    migrationsFolder: "./migrations",
  });
};

const queryClient = postgres(Bun.env.DB_URL);

export const db: PostgresJsDatabase = drizzle(queryClient);
