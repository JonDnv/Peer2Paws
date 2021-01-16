// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.slider');
//     var instances = M.Slider.init(elems, options);
//   });

const { DataTypes } = require("sequelize/types");
const Animal = require("../../models/Animal");

//JK--Handlebars attached after DOM fully loads--//
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }


//JK--FETCH CALL TO GRAB ALL PETS--//

fetch('api/see-all', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(Animal),
})
    .then((response) => response.json({
        Animals: DataTypes
    }))
    .catch((err) => console.error(err));
});