const express = require("express");
const app = express();

//App Setup
const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

//Static files
app.use(express.static("public"));
