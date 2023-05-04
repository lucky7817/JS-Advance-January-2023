function extract(content) {
    //let text = document.getElementById('content');
    let pattern = /\((?<words>[A-z a-z]+)+\)/g;
    let parenthesizedTextArr = content.matchAll(pattern);
    let result = [];

    for (const match of parenthesizedTextArr) {
        result.push(match.groups.words) 
    }
    
    
    console.log(result);
    //console.log(parenthesizedTextArr);

}

extract('The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill).')