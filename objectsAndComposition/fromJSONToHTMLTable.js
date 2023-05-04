function fromJSONToHTMLTable(dataAsJson) {

    const result = [];

    result.push('<table>');

    const data = JSON.parse(dataAsJson);

    let keysObj = Object.keys(data[0]);
    result.push(`<tr>${keysObj.map(p => `<th>${p}</th>`).join('')}</tr>`);

    for (const entry of data) {
        result.push(`<tr>${keysObj.map(p => `<td>${entry[p]}</td>`).join('')}</tr>`);
    }
    result.push('</table>');

    return result.join('\n');
}

console.log(fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`));
fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);