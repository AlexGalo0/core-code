const express = require("express");
const app = express();
const port = 3000;

app.get("/api/buba-gump/pong", (req, res) => {
  res.json({
    message: "Ping!",
  });
});

app.get("/api/buba-gump/ping", (req, res) => {
  res.json({
    message: "Pong!",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
