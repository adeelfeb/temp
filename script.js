const url = 'https://api.github.com/users/adeelfeb';

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);  // Print the JSON data to the console
    })
    .catch(error => {
        console.log('Error:', error);  // Handle errors
    });
