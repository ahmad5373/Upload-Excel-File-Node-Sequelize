const express = require("express");
const app = express();
const database = require("./database/connection");
global.__basedir = __dirname + "/.";
const routes = require("./routes/upload");
routes(app);
const port = process.env.port || 9000;

app.get("/", (req, res) => {
  res.send("App is listening on port 9000");
});

//Use express.json as a middlewere
app.use(express.json());

app.listen(port, () => {
  console.log(`app is listening on : http://localhost:${port}`);
});
