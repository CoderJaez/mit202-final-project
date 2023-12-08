import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
type config = {
  DATABASE_NAME: string;
  USERNAME: string;
  PASSWORD: string;
};
const { DATABASE_NAME, USERNAME, PASSWORD } = process.env as config;
const sequelize = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
