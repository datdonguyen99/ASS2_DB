// const { Client } = require("pg");
// const dotenv = require("dotenv");
// const cors = require("cors")

// dotenv.config();

// const client = new Client({
//   host: process.env.HOST_PG,
//   user: process.env.USER_PG,
//   port: process.env.PORT_PG,
//   password: process.env.PASSWORD_PG,
//   database: process.env.DATABASE_PG,
// });

// client.connect();

// client.query(`Select * from paper where category = 'REVIEW_BOOK'`, (err, res) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err.message);
//   }
//   client.end;
// });
