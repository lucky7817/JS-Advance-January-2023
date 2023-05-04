function area() {

    return Math.abs(this.x * this.y);

};

function vol() {

    return Math.abs(this.x * this.y * this.z);

};

function solve(area, vol, input) {
    let coordinates = JSON.parse(input);
    let result = [];

    for (const numbers of coordinates) {

        result.push({
            area: area.call(numbers),
            volume: vol.call(numbers)
        });
    }
    return result

}

console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`));