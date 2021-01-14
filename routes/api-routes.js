const Animals = require("../models/Animal")

module.exports = function(app) {
  

    app.get('/api/see-all', (req, res) => {
        Animals.findAll({}).then((results) => res.json(results));
      });
}