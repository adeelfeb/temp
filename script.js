// Function to fetch posts
async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;  // Return the data for use in other functions
    } catch (error) {
        console.log('Error:', error);  // Handle errors
    }
}

// Function to display posts in the 'data' div
async function displayPosts() {
    const data = await fetchPosts();  // Fetch posts
    if (data) {
        let output = '<h2>Posts</h2>';
        data.slice(0, 5).forEach(post => {  // Limit to 5 posts
            output += `
                <div>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
        });

        document.getElementById('data').innerHTML = output;  // Display posts in the 'data' div
    }
}

// Function to log posts to the console
async function logPosts() {
    const data = await fetchPosts();  // Fetch posts
    if (data) {
        console.log(data);  // Log the data to the console
    }
}

// Add event listeners to buttons
document.getElementById("fetchDataBtn").addEventListener("click", displayPosts);
document.getElementById("inConsole").addEventListener("click", logPosts);
