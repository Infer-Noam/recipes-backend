import { DataSource } from "typeorm";

const databasePort =
  process.env.DB_PORT ??
  (() => {
    throw new Error("Missing database port"); // Throws an error if no database port number is configured
  })();

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(databasePort),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [],
  migrations: [],
  synchronize: false,
  logging: false,
});

export default AppDataSource;
