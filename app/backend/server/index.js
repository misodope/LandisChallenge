const express = require("express");

const app = express();

// to support JSON-encoded bodies
app.use(express.json());

// to support URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello Landis");
});

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
