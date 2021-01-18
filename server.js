require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const { Sequelize } = require("./models");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing

const db = require('./models');
const bodyparser = require('body-parser');
// const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyparser.json());

// Static directory
app.use(express.static("public"));

//Middleware for Handlebars Rendering Engine
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`App listening on http://localhost:${PORT}`)
  );
});

const favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/images/favicon.png'))
