const createCalculator = require('./addSubtract');
const { expect } = require('chai');

describe('Calculator', function () {
    let calc = null;

    beforeEach(() => {
        calc = createCalculator();

    });

    it('return has all methods', () => {
        expect(calc).to.has.hasOwnProperty('add');
        expect(calc).to.has.hasOwnProperty('subtract');
        expect(calc).to.has.hasOwnProperty('get');
    });

    it('return is start zero', () => {
        expect(calc.get()).to.equal(0);
    });

    it('return add one number', () => {
        calc.add(1);
        expect(calc.get()).to.equal(1);
    });

    it('return multiple numbers', () => {
        calc.add(1);
        calc.add(2);
        expect(calc.get()).to.equal(3);
    });

    it('return subtract one number', () => {
        calc.subtract(1);
        expect(calc.get()).to.equal(-1);
    });

    it('return subtract multiple numbers', () => {
        calc.subtract(1);
        calc.subtract(2);
        expect(calc.get()).to.equal(-3);
    });

    it('return add and subtract number', () => {
        calc.add(1);
        calc.subtract(2);
        expect(calc.get()).to.equal(-1);
    });

    it('return if is string', () => {
        calc.add('1');
        calc.add('2');
        calc.subtract('4');
        expect(calc.get()).to.equal(-1);
    });

});