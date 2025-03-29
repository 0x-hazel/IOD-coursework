function performCalculation(route) {
    const a = document.getElementById("numA").value;
    const b = document.getElementById("numB").value;
    let result = "";
    axios.get(`/calc/${route}?a=${a}&b=${b}`)
        .then((response) => {
            result = response.data.result.toString();
        })
        .catch((error) => {
            console.error(error);
            result = "An error occurred";
        })
        .finally(() => {
            document.getElementById("result").innerText = result;
        });
}
