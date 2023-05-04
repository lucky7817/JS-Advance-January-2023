const isSymmetric = require('./checkForSymmetry');
const { expect } = require('chai');

describe('check is symmetry', function () {

    it('return false if input is not an array', () => {
        //Arrange
        let input = 123;
        //Assert
        expect(isSymmetric(input)).to.be.false;
    });

    it('return true if input is simmetric array', () => {
        //Arrange
        let input = [1, 2, 3, 3, 2, 1];
        //Assert
        expect(isSymmetric(input)).to.be.true;

    });

    it('return false if input array is not simmetric', () => {
        //Arrange
        let input = [1, 2, 3, 4];
        //Assert
        expect(isSymmetric(input)).to.be.false;

    });

    it('return true when length is odd', () => {
        //Arrange
        let input = [1, 2, 3, 4, 3, 2, 1];
        //Assert
        expect(isSymmetric(input)).to.be.true;

    });

    it('return false if input is not array', () => {
        //Arrange
        let input = '123';
        //Assert
        expect(isSymmetric(input)).to.be.false;

    });

    it('return false if any element in array is string', () => {
        //Arrange
        let input = [1, 2, 3, 3, 2, '1'];
        //Assert
        expect(isSymmetric(input)).to.be.false;

    });
}); 