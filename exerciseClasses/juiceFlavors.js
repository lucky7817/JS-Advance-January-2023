function juiceFlavors(input) {

    let obj = {};
    let store = {};
    let producedBottles = 0;

    for (const fruit of input) {
        let sortedLine = fruit.split(' => ');
        let [fruitName, quantity] = sortedLine;
        quantity = Number(quantity);

        if (!obj.hasOwnProperty(fruitName)) {
            obj[fruitName] = 0;
        }
        obj[fruitName] += quantity;
        producedBottles = 0;

        if (obj[fruitName] >= 1000) {
            producedBottles = Math.floor(obj[fruitName] / 1000);
            obj[fruitName] -= (producedBottles * 1000);

            if (!store.hasOwnProperty(fruitName)) {
                store[fruitName] = 0;
            }
            store[fruitName] += producedBottles;
        } else {
            continue;
        }
    }

    Object.keys(store).forEach(key => {
        console.log(`${key} => ${store[key]}`);
    });
}

// juiceFlavors(['Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549']);
juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);