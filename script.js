let eligibleUsernames = [];

// Fetch the list of eligible usernames from the JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        eligibleUsernames = data;
    })
    .catch(error => console.error('Error fetching data:', error));

function checkEligibility() {
    const username = document.getElementById('username').value;
    const resultElement = document.getElementById('result');

    if (username === '') {
        resultElement.textContent = 'Please enter a username.';
        resultElement.style.color = 'red';
        return;
    }

    const isEligible = eligibleUsernames.includes(username);

    if (isEligible) {
        resultElement.textContent = `${username} elig lu nyet.`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `${username} HAHA GA ELIG.`;
        resultElement.style.color = 'red';
    }
}
