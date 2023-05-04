const isOddOrEven = require('./evenOrOdd');
const { expect } = require('chai');

describe('is ODD or EVEN', function () {
    //invalid input tests
    it('return undefined is input not string', () => {
        let input = 10;
        expect(typeof isOddOrEven(input)).to.equal('undefined');
    });

    it('return undefined if input is an object', () => {
        expect(isOddOrEven({})).to.be.undefined;
    });

    it('return undefined if input is an array', () => {
        expect(isOddOrEven([])).to.be.undefined;
    });

    it('return undefined if input is undefined', () => {
        expect(isOddOrEven(undefined)).to.be.undefined;
    });

    //valid input tests

    it('return even if string length is even', () => {
        expect(isOddOrEven('dogs')).to.equal('even');
    });

    it('return odd if string length is odd', () => {
        expect(isOddOrEven('dog')).to.equal('odd');
    });

    it('return undefined if input is undefined', () => {
        expect(isOddOrEven(undefined)).to.be.undefined;
    });  
});