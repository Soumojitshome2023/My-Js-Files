function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate fetching data after 2 seconds
            const data = { message: 'Data fetched successfully' };
            resolve(data);
        }, 2000);
    });
}


async function fetchDataUsingAsyncAwait() {
    try {
        console.log('Fetching data...');
        const result = await fetchData(); // Wait for the Promise to resolve
        console.log(result.message);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the async function
fetchDataUsingAsyncAwait();


