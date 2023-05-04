function townPopulation(townAndPopulationStr) {
    
    const result = {};
    
    for (const line of townAndPopulationStr) {
        const tokens = line.split(' <-> ');
        const town = tokens[0];
        const population = Number(tokens[1]);
        
        if (town in result) {
            result[town] += population;
        } else {
            result[town] = population
        }
    }
    // other variant:
    // console.log(Object
    //     .entries(result)
    //     .map(([name, population]) => `${name} : ${population}`)
    //     .join('\n'));

    for (const key in result) {

        console.log(`${key} : ${result[key]}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);