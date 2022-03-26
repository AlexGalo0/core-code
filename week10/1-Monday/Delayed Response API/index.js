const express = require("express");
const app = express();
const port = 3000;

app.get("/api/delay/:delay?", function (req, res) {
  const time = req.params.delay || 1000;
  console.log(time);
  setTimeout(res.send(`Times 'up in ${time}`), time);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
