const path = require("path");
const express = require("express");

const app = express();
app.use(express.static("dist"));


const port = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

const appServer = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = appServer;
