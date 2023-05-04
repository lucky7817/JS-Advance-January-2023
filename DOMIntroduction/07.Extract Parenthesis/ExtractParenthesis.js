function extract(content) {

    let textElement = document.getElementById('content').textContent;

    let result = [];

    let pattern = /\(([^(]+)\)/g;
    //let pattern = /\((?<text>[^(]+)\)/g;
    let matches = textElement.matchAll(pattern);

    for (const match of matches) {
        result.push(match[1]);
    }

    return result.join('; ');
    //console.log(result.join('; '))
}