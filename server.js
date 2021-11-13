const express = require("express");
const cors = require("cors");
// const index = require("./src/routes/index");
const paperRoute = require("./src/routes/paper.routes");

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(express.urlencoded({ extended: true }));

// app.use("/api/", index);
app.use("/api/", paperRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
