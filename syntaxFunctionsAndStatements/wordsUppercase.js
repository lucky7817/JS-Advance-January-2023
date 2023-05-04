function wordsUppercase(str) {

    const regex = /[A-z0-9]+/g;
    const arrWords = str.match(regex).map(n => n.toUpperCase()).join(', ');

    console.log(arrWords);
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');