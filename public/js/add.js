//JK--Handlebars attached after DOM fully loads--//
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
});

//JK--Setting up listener for adding Pet for Adoption--//
const submitPetBtn = document.getElementById('pet-submit');
submitPetBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const newAnimal = {
        AnimalName: document.getElementById('animalName').value.trim(),
        Age: document.getElementById('age').value.trim(),
        About: document.getElementById('about').value.trim(),
     };

     //JK--Send a POST request to update the ALL PETS list--//

fetch('/api/new', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newAnimal),
})
    .then((response) => response.json())
    .then((data) => {
        console.log('New Pet added!', data);
    });
    });