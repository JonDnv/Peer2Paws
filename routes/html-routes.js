const path = require("path");
const Animals = require('../models')

module.exports = function (app) {
  //Routes for different pages - NAV BAR
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/sign-in", (req, res) => {
    res.render("sign-in")
});


  app.get("/contact", (req, res) => {
    res.render("contact");
  });

  //Routes for different pages - SIDE BAR

  app.get("/api/see-all", (req, res) => {
    res.render("see-all");
  });

  app.get("/specificpets", (req, res) => {
    res.render("specificpets");
  });

  app.get("/api/specificpets/:pet?", (req, res) => {

    const pets = document.getElementById('sheltersBtn').value.trim();

    Animals.Animal.findAll({
        where: {
            routeName: pets
        }
    })
    .then((data) => {
            res.render('specificType', {
                pets: data
            })
    })
      
    });

  app.get("/post-pet", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/post-pet.html"));
  });

  app.get("/signup", (req,res) => {
    res.sendFile(path.join(__dirname, '../public/signup.html'))
});

  app.get("/apply", (req, res) => {
    res.render("apply");
  });

  //View cat breed route
  app.get("/cat-breed", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/cat-breed.html"));
  });

  //View dog breed route
  app.get("/dog-breed", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/dog-breed.html"));
  });
};
