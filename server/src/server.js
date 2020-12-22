const express = require("express");
const bodyParser = require("body-parser");

const route = require('./routes/pokemon');

const app = express();
const args = process.argv.slice(2);

const Port = args[0];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


app.use("/", route);

app.listen(Port, function() {
  console.log(
    `Server is listening on http://localhost:${Port}`
  );
});