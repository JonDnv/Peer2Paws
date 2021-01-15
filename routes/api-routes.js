const Animals = require("../models/Animal");
const EmailRecepient = require("../models/EmailRecepient");

module.exports = function (app) {
  app.get("/api/see-all", (req, res) => {
    Animals.findAll({}).then((results) => res.json(results));
  });
};
