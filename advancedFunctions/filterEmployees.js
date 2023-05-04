function filterEmployees(input, criteria) {

    let objects = JSON.parse(input);
    criteria = criteria.split('-');
    let result = [];

    for (const object of objects) {

        if (object[criteria[0]] === criteria[1]) {
            result.push([`${object.first_name} ${object.last_name} - ${object.email}`]);     
        }
    }
    result.forEach((x, i) => {
        console.log(`${i}. ${x.join()}`);
    });
}

filterEmployees(`[{
    "id": "1",  
    "first_name": "Ardine",   
    "last_name": "Bassam",  
    "email": "abassam0@cnn.com",  
    "gender": "Female"   
    }, {    
    "id": "2",  
    "first_name": "Kizzee",   
    "last_name": "Jost",   
    "email": "kjost1@forbes.com",   
    "gender": "Female" 
    }, 
    {
    "id": "3",
    "first_name": "Evanne", 
    "last_name": "Maldin", 
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
    'gender-Female');