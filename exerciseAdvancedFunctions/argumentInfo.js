function argumentInfo() {

    let typeOfArg = {};
    let arr = Array.from(arguments);

    for (const arg of arr) {
        type = typeof arg
        if (!typeOfArg.hasOwnProperty(type)) {
            typeOfArg[type] = 0;
        }
        typeOfArg[type] += 1;

        type = '';
        console.log(`${typeof arg}: ${arg}`);
    }
    Object.keys(typeOfArg)
        .sort((a, b) => typeOfArg[b] - typeOfArg[a])
        .forEach(key => console.log(`${key} = ${typeOfArg[key]}`));
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });