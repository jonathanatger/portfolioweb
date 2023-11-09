var express = require("express");
var http = require("http");
var dotenvConfig = require("dotenv");
var path = require("path");
var serveStatic = require("serve-static");
const bodyParser = require("body-parser");
var reload = require("reload");

//Config express and declare its components
var app = express();
var router = express.Router();

var cors = require("cors");
app.use(cors());

var PORT = process.env.PORT || 3000;

//files to send
app.use(express.static(path.join(__dirname, "/public/dist")));
// this is a useless comment

//get the ability to parse http requests
app.use(bodyParser.json());

//Routes config
router.get("/cv", function (req, res) {
  res.sendFile(__dirname + "/public/dist/index.html");
});

router.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/public/dist/index.html");
});

router.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/dist/index.html");
});

//Make use of the router
app.use("/", router);

//launch the server
app.listen(PORT, function () {
  console.log(`Listening at port ${PORT} `);
});

reload(app);
