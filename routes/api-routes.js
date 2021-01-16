// const app = express();
const Animals = require('../models');
const EmailRecepient = require("../models/EmailRecepient");

module.exports = (app) => {
  app.get('/see-all', (req, res) => {
    Animals.Animal.findAll()
    .then((Animal) => res.json(Animal))
    })
};

  
