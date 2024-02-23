const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This is my first node.js server");
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})

