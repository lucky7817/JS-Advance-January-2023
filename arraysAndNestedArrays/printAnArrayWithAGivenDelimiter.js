function printAnArrayWithAGivenDelimiter(arr, str) {

    let result = arr.join(str);
    console.log(result);
}

printAnArrayWithAGivenDelimiter(['One',
'Two',
'Three',
'Four',
'Five'],
'-');