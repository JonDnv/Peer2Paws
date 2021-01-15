var db = require("./models");

var seed = {
    addAnimal: function() {
        db.PetType.create({
            TypeName:"dog"
        })
    }
} //can't get animals because owner is not working

module.exports = seed;




//Need to create authentication because we need the owner info for anything else
