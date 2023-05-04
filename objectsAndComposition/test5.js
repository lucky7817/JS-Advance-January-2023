let phonebook = {
    'Ivan Ivanov': 046556232,
    'Georgi Georgiev': 0894523698,
    'Doncho Manolov': 0856237851,
}

phonebook['Ivan Ivanov'] = 0888889977


// for (const key in phonebook) {
//     console.log(`${key} ------${phonebook[key]}`)
// }

let names = Object.keys(phonebook).forEach(x => {
console.log(`${x}----${phonebook[x]}`)
})

let entries = Object.entries(phonebook);

for (const [key, value] of entries) {
    console.log(`${key} ---- ${value}`)
}