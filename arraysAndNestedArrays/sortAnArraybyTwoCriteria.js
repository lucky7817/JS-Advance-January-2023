function sortAnArraybyTwoCriteria(arr) {
    
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(arr.join('\n'));  
}

sortAnArraybyTwoCriteria(['alpha', 'beta', 'gamma']);
sortAnArraybyTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);