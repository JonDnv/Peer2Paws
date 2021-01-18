const Animals = require('../models');
const EmailRecepient = require("../models/EmailRecepient");

module.exports = (app) => {
//JK--API call to view and render all pets--//
  app.get('/api/see-all', (req, res) => {
    Animals.Animal.findAll()
    .then((Animal) => {
      console.log(JSON.parse(JSON.stringify(Animal)))
      
      res.render('see-all', {
      Animal: JSON.parse(JSON.stringify(Animal))
    })}
    );
    });


//JK--API call to post a pet for adoption--//
app.post('/api/post-pet', (req, res) => {
  console.log('New Pet added!');

  const animal = JSON.parse(Animals);
  const routeName = animal.AnimalName.replace(/\s+/g, '').toLowerCase();

  Animals.Animal.create({
    routeName,
    OwnerName: animal.OwnerName,
    AnimalName: animal.AnimalName,
    TypeName: animal.TypeName,
    Age: animal.Age,
    OwnerEmail: animal.OwnerEmail,
    About: animal.About,
  });
  res.status(200).json(animal);
});
};



//     .then((Animal) => res.json({
//       Animal: Animal
//     }))
//     })
// };
  

// const db = require("../models/AnimalInfo.js");

//Dependencies

// const Pets = require("../models/AnimalInfo");

// const Adoption_Form = require("../models/adoptionForm");

// //Routes

// module.exports = function (app) {
//   app.get("/", function (req, res) {
//     const data = { AnimalInfo: {}, OwnerInfo: {}, PetType: {} };
//   });
// };

// Pets.findAll({}).then(function (result) {
//   console.log(result);
//   data.Pets = result;
// });

// res.render("index", {alldata: data});


// //Searching for specific pet (or all pets) then provides JSON

// app.get("api/Pets/:petid?, function (req, res")

//     if (req.params.petid){

//         Pets.findOne({
//             where: {
//                 id: req.params.petid
//             }
//         }).then(function {
//             return res.json(result);
//         });
//     }
//     else{
//         Pets.findAll({}).then(function(result){
//             return res.json(result);
//         });
    
