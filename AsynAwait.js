async function checking() {
    let API1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("API NO 1");
        }, 1000);
    });

    let API2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("A Second API Has been called");
        }, 6000);
    });

    // Await each API to resolve and log their responses
    const response1 = await API1;
    console.log(response1);

    const response2 = await API2;
    console.log(response2);
}

// Call the async function
checking().then(() => {
    console.log("All APIs have been called and resolved.");
});
