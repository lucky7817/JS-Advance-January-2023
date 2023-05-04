function generateReport() {
    let outputEl = document.querySelector('#output');
    let result = [];
    let checksEl = Array.from(document.querySelectorAll('thead tr th input'));
    let rowsEl = Array.from(document.querySelectorAll('tbody tr')); 

    rowsEl.forEach(row => {
        let current = {};
        Array.from(row.querySelectorAll('td')).forEach((x, i) => {
            if (checksEl[i].checked) {
                console.log(checksEl[i]);
                current[checksEl[i].name] = x.textContent;
            }
        });
        result.push(current)
    });

    outputEl.value = JSON.stringify(result);
}