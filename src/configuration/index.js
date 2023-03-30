import dotenv from "dotenv";

dotenv.config();

const config = {
  APP_NAME: process.env.API_NAME,
  PORT: process.env.PORT,
  API_KEY: process.env.API_KEY,
  GLOBAL_ID: process.env.GLOBAL_ID,
  ATTRIBUTE: process.env.ATTRIBUTE
};

const absentConfig = Object.entries(config)
    .map(([key, value]) => [key, !!value])
    .filter(([, value]) => !value)
    .map(([key]) => key);

const leastAbsentConfig = 0;

if (absentConfig.length < leastAbsentConfig) {
  throw new Error(`Missing Configuration: ${absentConfig.join(",")}`);
}

export default config;
