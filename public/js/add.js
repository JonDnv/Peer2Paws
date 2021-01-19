

//JK--Setting up listener for adding Pet for Adoption--//
const submitPetBtn = document.getElementById('postBtn');
submitPetBtn.addEventListener('click', (e) => {
  e.preventDefault();

//JK--Retrieve data input from form--//
  const newAnimals = {
        OwnerName: document.getElementById('OwnerName').value.trim(),
        AnimalName: document.getElementById('AnimalName').value.trim(),
        TypeName: document.getElementById('TypeName').value.trim(),
        Age: document.getElementById('Age').value.trim(),
        OwnerEmail: document.getElementById('OwnerEmail').value.trim(),
        About: document.getElementById('About').value.trim(),
     };

//JK--Send a POST request to update the ALL PETS list--//

fetch('/api/post-pet', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newAnimals),
})
    .then((response) => response.json())
    .then((data) => {
        console.log('New Pet added successfully!', data);
        alert(`Your Pet ${newAnimals.AnimalName} will find a new home!`);
    })
    .catch((error) => {
        console.error('Error:', error);
        alert(error);


//JK--Clear the content of the input fields--//
document.getElementById('OwnerName').value = '';
document.getElementById('AnimalName').value = '';
document.getElementById('TypeName').value = '';
document.getElementById('Age').value = '';
document.getElementById('OwnerEmail').value = '';
document.getElementById('About').value = '';

})
});