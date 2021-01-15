// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.slider');
//     var instances = M.Slider.init(elems, options);
//   });

//JK--Handlebars attached after DOM fully loads--//
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
});

//JK--FETCH CALL TO GRAB ALL PETS(MAYBE ITS OWN JS FILE?)--//

fetch('api/all', {
    method: 'GET,',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {
        data.map(({ Animals }))
    })
    .catch((err) => console.error(err));
