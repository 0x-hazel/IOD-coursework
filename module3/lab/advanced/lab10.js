// run 'npm install node-fetch'
// run 'npm pkg set type=module'

import fetch from "node-fetch";
globalThis.fetch = fetch;

function fetchURLData(url) {
    let fetchPromise = fetch(url).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    });
    return fetchPromise;
}

async function fetchURLDataAsync(...urls) {
    return Promise.all(urls.map((url) => fetchURLData(url)))
}

fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
    .then((data) => console.log(data))
    .catch((error) => console.error(error.message));

try {
    let result = await fetchURLDataAsync("https://jsonplaceholder.typicode.com/todos/1", "https://jsonplaceholder.typicode.com/todos/2", "https://jsonplaceholder.typicode.com/todos/3")
    console.log(result)
} catch (e) {
    console.error(e)
}