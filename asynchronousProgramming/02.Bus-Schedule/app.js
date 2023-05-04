function solve() {

    let lable = document.querySelector('#info span');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    let stop = {
        next: 'depot',
    }

    async function depart() {
        departBtn.disabled = true;
        let url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        let res = await fetch(url);

        if(res.status !== 200) {
            lable.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
            alert('Wrong data!');
        }

        stop = await res.json();
        lable.textContent = `Next stop ${stop.name}`;
        arriveBtn.disabled = false;
    }

    function arrive() {
        departBtn.disabled = false;
        lable.textContent = `Arriving at ${stop.name}`;
        arriveBtn.disabled = true;   
    }

    return {
        depart,
        arrive
    };
}

let result = solve();