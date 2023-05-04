function robot() {

    let receipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }

    let storage = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0,
    }

    function restock(microelement, quantity) {
        storage[microelement] += Number(quantity);
        return 'Success';
    }

    function prepare(recipe, quantity) {
        let secondStorage = {}

        for (const element in receipes[recipe]) {
            let left = storage[element] - receipes[recipe][element] * quantity;

            if (left < 0) {
                return `Error: not enough ${element} in stock`;
            } else {
                secondStorage[element] = left;
            }
        }

        Object.assign(storage, secondStorage);
        return 'Success';
    }

    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;

    }

    function control(string) {
        let [command, item, quantity] = string.split(' ');

        switch (command) {
            case 'restock':
                return restock(item, quantity);
            case 'prepare':
                return prepare(item, quantity);
            case 'report':
                return report();
        }
    }

    return control;
}

let manager = robot();
console.log(manager('restock flavour 50'));
console.log(manager('prepare lemonade 4'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));
// console.log(manager("restock flavour 50")); // Success
// console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in
// stock




// solution(['restock flavour 50',
//     'prepare lemonade 4',
//     'restock carbohydrate 10',
//     'restock flavour 10', 'prepare apple 1', 'restock fat 10', 'prepare burger 1', 'report']);