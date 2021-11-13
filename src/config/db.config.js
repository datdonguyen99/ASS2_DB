const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
  console.log("db_pgadmin connect successfully!");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
