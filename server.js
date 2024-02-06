const express = require("express");
const handle = require("./handlers");
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const routes = require('./routes');
require('dotenv').config();
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const db  =  require("./models");



app.use(cors());
app.use(bodyParser.json());
dotenv.config();
 const port  = 4000;


mongoose.connect(   process.env.MONGO_URL,  {useNewUrlParser: true,
 
 }).then(console.log("connected to mongo db")).catch((err) => console.log(err)); 




 
app.get("/", function(req, res) {
  res.send("hello world")
});

app.use('/api/auth', routes.auth);
app.use('/api/poll', routes.poll);

app.use(handle.notFound);

app.use(handle.errors);

app.listen(port, console.log("tobi is king "))