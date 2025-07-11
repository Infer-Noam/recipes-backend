import "dotenv/config"; // Loads environment variables
import { DataSource } from "typeorm";
import entities from "./entity/index";
import migrations from "./migration/index";

const databasePort =
  process.env.DB_PORT ??
  (() => {
    throw new Error("Missing database port"); // Throws an error if no database port number is configured
  })();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(databasePort),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: entities,
  migrations: migrations,
  synchronize: false,
  logging: false,
});
