//JK--JS file for api calls that GET information for selected pet?--//

const animalTypeBtn = document.getElementById('sheltersBtn');
if (animalTypeBtn) {
  animalTypeBtn.addEventListener('click', () => {
    let specificpets = document
      .getElementById('selectedType')
      .value.trim();


//JK--Fetch the information of Selected Pet and Route user to Profile page of Pet(using handlebars?)--//
fetch(`/api/${specificpets}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then((response) => 
console.log(response)
)
.then((data) => {
    console.log(`Pets searched by ${specificpets}`)
    const animals = data;
    return JSON.parse(JSON.stringify(animals))
    })
  })
};