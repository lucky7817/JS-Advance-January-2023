function playngCards(face, suit) {

    let cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    }

    if (!cardFaces.includes(face)) {
        throw new Error('Invalid face');

    } else if (Object.keys(suits).includes(suit) === false) {
        throw new Error('Invalid suit');
    }

    return {
        face,
        suit,
        toString() {
            return `${face}${suits[suit]}`;
        }
    };
}

playngCards('10', 'S');
//card.toString();

module.exports = playngCards;