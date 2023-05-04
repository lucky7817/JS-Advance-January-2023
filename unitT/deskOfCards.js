const { cardFactory } = require('./playingCards');

function deskOfCards(arr) {
    let desk = [];

    for (let i = 0; i < arr.length; i++) {
        let cardData = arr[i].split('');
        let [face, suit] = [
            cardData.slice(0, -1).join(''),
            cardData[cardData.length - 1]
        ]

        try {
            desk.push(cardFactory(face, suit).toString())

        } catch (e) {
            console.log(`Invalid card: ${arr[i]}`);
            return;
        }
    }

    console.log(desk.join(' '));
}
