// //waits to attach handlebars until DOM loaded
// document.addEventListener('DOMContentLoaded', (event) => {
//     if(event) {
//         console.info('DOM loaded');
//     }


//     if (window.location.pathname === '/contact') {
//         const contactBtn = document.getElementById('#contactBtn');

//         contactBtn.addEventListener('click', (event) => {
//             event.preventDefault();
//             const email = 'jules.wood42@gmail.com';
//             const subject = 'Circle Around';
//             const emailBody = 'Message';
//             window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
//         })

//     }

const updateBtn = document.getElementById('verifyBtn');
updateBtn.addEventListener('click', (e) => {
    e.preventDefault();

//JK--Retrieve data of New Member--//
    const newMember = {
        Name: document.getElementById('FirstName').value.trim(),
        Email: document.getElementById('Email').value.trim(),
    };

//JK--Send the POST request to update the Members list-//

fetch('/api/sign-up', {
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
    });

//JK--Clearing the form--//

document.getElementById('FirstName').value = '';
document.getElementById('Email').value = '';

})










// })