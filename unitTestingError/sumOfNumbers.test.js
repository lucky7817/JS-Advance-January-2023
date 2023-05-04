const sum = require('./sumOfNumbers')
const { expect } = require('chai');

describe('sum of the values of array', function () {

    it('should return correct sum', () => {
        let array = [1, 2, 3, 4, 5];
        expect(sum(array)).to.be.equal(15);

    });

    it('should return correct sum with array of mixed types', () => {
        let array = [true, '2', 3, 4, 5];
        expect(sum(array)).to.be.equal(15);

    });

    it('should return NaN if input is not array', () => {
        let array = 'Invalid array';
        expect(sum(array)).to.be.NaN;

    });

});

