//JK--JS file for api calls that GET information for selected pet?--//

const viewAnimal = document.getElementById('animalSelected');
if (viewAnimal) {
  viewAnimal.addEventListener('click', () => {
    let selectedAnimal = document
      .getElementById('viewAnimal')
      .value.trim();

//JK--Fetch the information of Selected Pet and Route user to Profile page of Pet(using handlebars?)--//
fetch(`/api/${selectedAnimal}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {

        });
    });
};