import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from "dotenv";

dotenv.config();

export const config: TypeOrmModuleOptions = {
  type: "postgres",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: +process.env.PORT,
  host: process.env.DB_HOST,
  database: process.env.DB_DB,
  synchronize: true,
  entities: ["dist/**/*.entity{.ts,.js}"],
  logging: false,
};
