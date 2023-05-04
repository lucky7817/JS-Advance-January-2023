function ticketsInput(descriptions, sortingCriterion) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];

    for (const line of descriptions) {
        let [destination, price, status] = line.split('|');
        price = Number(price);

        result.push(new Ticket(destination, price, status));
    }
    return result.sort((a, b) => {
        if (typeof a[sortingCriterion] === 'number') {
            return a[sortingCriterion] - b[sortingCriterion];
        } else {
            return a[sortingCriterion].localeCompare(b[sortingCriterion]);
        }
    });
}

ticketsInput(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');