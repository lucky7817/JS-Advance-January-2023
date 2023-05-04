const lookupChar = require('./charLookup');
const { expect } = require('chai');

describe('retrieves a character at a given index of a string', function() {

    it('return undefined if the first parameter is not a string', () => {
        expect(lookupChar(100, 2)).to.be.undefined;
    });

    it('return undefined if the second parameter is not a number', () => {
        expect(lookupChar('dogs', '2')).to.be.undefined;
    });

    it('return undefined if the first parameter is boolean', () => {
        expect(lookupChar(true, 2)).to.be.undefined;
    });

    it('return undefined if the second parameter is boolean', () => {
        expect(lookupChar('dogs', true)).to.be.undefined;
    });

    it('return undefined if the second parameter is floating-point number', () => {
        expect(lookupChar('dogs', 2.3)).to.be.undefined;
    });

    it('return undefined if both parameters are incorect type', () => {
        expect(lookupChar(100, '2')).to.be.undefined;
    });

    it('return incorrect index if it out of bounds', () => {
        expect(lookupChar('dogs', 4)).to.equal('Incorrect index');
    });

    it('return incorrect index if it negative number', () => {
        expect(lookupChar('dogs', -2)).to.equal('Incorrect index');
    });

    it('return the character at the specified index in the string', () => {
        expect(lookupChar('dogs', 2)).to.equal('g');
    });

});