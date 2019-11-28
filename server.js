const express = require("express");
const app = express();
const debug = require("debug")("emcmahon_counseling:server");
const PORT = process.env.PORT || 3000;

app.use(express.static("./public"));

app.get("/", function(req, res) {
  res.sendFile("./public/index.html")
});

app.listen(PORT, () => {
  debug(`served up on: ${PORT}`)
});
