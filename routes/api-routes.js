// const { default: ModelManager } = require('sequelize/types/lib/model-manager');
const Animals = require('../models');
const EmailRecepients = require("../models");

module.exports = (app) => {
//JK--API call to view and render all pets--//
  app.get('/see-all', (req, res) => {
    Animals.Animal.findAll()
    .then((Animal) => {
      console.log(JSON.parse(JSON.stringify(Animal)))
      
      res.render('see-all', {
      Animal: JSON.parse(JSON.stringify(Animal))
    })}
    );
    });

    /////JK--Begin calling for Specific Types--/////

    //--For Dogs--//
    app.get('/dog', (req, res) => {
      Animals.Animal.findAll({
        where: {
          TypeName: 'Dog',
        },
      }).then((Animal) => {
        res.render('specificType', {
          Animal: true,
          Animal: JSON.parse(JSON.stringify(Animal))
        })
      })
    });

  //--Cats--//
    app.get('/cat', (req, res) => {
      Animals.Animal.findAll({
        where: {
          TypeName: 'Cat',
        },
      }).then((Animal) => {
        res.render('specificType', {
          Animal: true,
          Animal: JSON.parse(JSON.stringify(Animal))
        })
      })
    });

  //--Birds--//
    app.get('/bird', (req, res) => {
      Animals.Animal.findAll({
        where: {
          TypeName: 'Bird',
        },
      }).then((Animal) => {
        res.render('specificType', {
          Animal: true,
          Animal: JSON.parse(JSON.stringify(Animal))
        })
      })
    });
  
  //--Rodents--//
    app.get('/rodent', (req, res) => {
      Animals.Animal.findAll({
        where: {
          TypeName: 'Rodent',
        },
      }).then((Animal) => {
        res.render('specificType', {
          Animal: true,
          Animal: JSON.parse(JSON.stringify(Animal))
        })
      })
    });

  //--Reptiles--//
    app.get('/reptile', (req, res) => {
      Animals.Animal.findAll({
        where: {
          TypeName: 'Reptile',
        },
      }).then((Animal) => {
        res.render('specificType', {
          Animal: true,
          Animal: JSON.parse(JSON.stringify(Animal))
        })
      })
    });

/////JK--End of API calls for specific Types--/////

    // app.get("/api/specificpets/:pet?", (req, res) => {
    //   // res.render("specificType");
    //   if (req.params.pet) {
    //     routeName = document.getElementById('selectedType').value.trim();
    //     Animals.Animal.findAll({
    //       where : {
    //         routeName: req.params.pet,
    //       },
    //     }).then((result) => res.json(result))
    //       .then((data) => {
    //         res.render('specificType', {
    //           Animal: data
    //         })
    //       })
    //   }

/////--API CALLS TO POST FROM FORMS @ FRONT END--/////


//JK--API call to post a pet for adoption--//
app.post('/api/post-pet', (req, res) => {
  console.log('New Pet added!');

  const animal = req.body;
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

//JK--API call to Sign up for Alerts--//
app.post('/api/signup', (req, res) => {
  console.log('New Member added');

  const member = req.body;
  const routeName = member.Name.replace(/\s+/g,'').toLowerCase();

  EmailRecepients.EmailRecepient.create({
    routeName,
    Name: member.RecName,
    Email: member.RecEmail,
  });
  res.status(200).json(member)
})
};



