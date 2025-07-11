import { DataSourceOptions } from "typeorm";
import { CreateRecipeTable1752241232937 } from "./1752241232937-CreateRecipeTable";

const migrations: DataSourceOptions["migrations"] = [
  CreateRecipeTable1752241232937,
];

export default migrations;
