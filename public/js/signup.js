

const updateBtn = document.getElementById('verifyBtn');
updateBtn.addEventListener('click', (e) => {
    e.preventDefault();

//JK--Retrieve data of New Member--//
    const newMember = {
        Name: document.getElementById('news-name').value.trim(),
        Email: document.getElementById('Email').value.trim(),
    };

//JK--Send the POST request to update the Members list-//

fetch('/api/signup', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMember),
})
    .then((response) => response.json())
    .then((data) => {
        console.log('New Member sign-up', data);
        alert(`You signed-up for updates!`);
    })
    .catch((error) => {
        console.error('Error:', error);
        alert(error);
    })

//JK--Clearing the form--//

document.getElementById('news-name').value = '';
document.getElementById('Email').value = '';

});
