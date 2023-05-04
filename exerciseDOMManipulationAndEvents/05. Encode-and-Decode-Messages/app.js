function encodeAndDecodeMessages() {
    let textAreas = document.querySelectorAll('textarea');
    let buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode() {
        let input = textAreas[0].value;
        let encodedMessage = '';

        for (let i = 0; i < input.length; i++) {
            let element = input[i];
            encodedMessage += String.fromCharCode(element.charCodeAt(0) + 1)
        }
        textAreas[1].value = encodedMessage;
        textAreas[0].value = '';
    }

    function decode() {
        let decodedMessage = '';
        let text = textAreas[1].value;

        for (let index = 0; index < text.length; index++) {
            const element = text[index];
            decodedMessage += String.fromCharCode(element.charCodeAt(0) - 1);   
        }
        textAreas[1].value = decodedMessage;
    }
}