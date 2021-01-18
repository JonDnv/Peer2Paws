//Pseudocode out routes that user will follow

//Get route that brings back all animals

const express = require('express');
const exphbs = require('express-handlebars');
const router = express.Router();
const { Router } = require('express');
const Animal = require('../models');

// get route -> index
router.get("/", function(req, res) {
    res.redirect("/");
  });

router.get('/see-all', function(req, res) {
        res.render('see-all', {
          Animals: 'WORK PLEASE'
        })
      });
