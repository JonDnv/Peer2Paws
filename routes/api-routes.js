// const app = express();
const Animals = require('../models');
const EmailRecepient = require("../models/EmailRecepient");

module.exports = (app) => {
  app.get('/see-all', (req, res) => {
    Animals.Animal.findAll()
    .then((Animal) => res.json(Animal))
    })
};

  

// const db = require("../models/AnimalInfo.js");

//Dependencies

const Pets = require("../models/AnimalInfo");

const Adoption_Form = require("../models/adoptionForm");

//Routes

module.exports = function (app) {
  app.get("/", function (req, res) {
    const data = { AnimalInfo: {}, OwnerInfo: {}, PetType: {} };
  });
};

Pets.findAll({}).then(function (result) {
  console.log(result);
  data.Pets = result;
});

res.render("index", {alldata: data});


//Searching for specific pet (or all pets) then provides JSON

app.get("api/Pets/:petid?, function (req, res")

    if (req.params.petid){

        Pets.findOne({
            where: {
                id: req.params.petid
            }
        }).then(function {
            return res.json(result);
        });
    }
    else{
        Pets.findAll({}).then(function(result){
            return res.json(result);
        });
    }
