const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

const productRoute = require('./routes/product.routes');

app.use('/', productRoute);

module.exports = app;