async function getInfo() {
    let stopNameEl = document.getElementById('stopName');
    let timeEl = document.getElementById('buses')

    let inputId = document.getElementById('stopId').value;

    let url = `http://localhost:3030/jsonstore/bus/businfo/${inputId}`;

    try {
        stopNameEl.textContent = 'Loading...'
        timeEl.replaceChildren();
        let res = await fetch(url);

        if (res.status !== 200) {
            throw new Error('Stop ID not found!')
        }
        let data = await res.json();

        Object.entries(data.buses).forEach(b => {
            let liEl = document.createElement('li');
            liEl.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
            timeEl.appendChild(liEl);
            stopNameEl.textContent = data.name;
        });
        

    } catch (error) {
        stopNameEl.textContent = 'Error';
    }
}