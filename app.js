const express = require("express");
const app = express();

const a = app.get("/", (request, response) => {
  var today = new Date();
  var dd = String(today.getDate());
  var mm = String(today.getMonth() + 1); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "-" + mm + "-" + yyyy;

  response.send(today);
});

app.listen(3000);

module.exports = a;
