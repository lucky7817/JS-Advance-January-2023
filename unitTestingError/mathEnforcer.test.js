const mathEnforcer = require('./mathEnforcer');
const { expect } = require('chai');

describe('check three functions: addFive, subtractTen, sum ', function() {
    describe('check first finction: addFive', function() {

        it('return undefined if parameter is not a number', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        });

        it('return undefined if parameter is boolean', () => {
            expect(mathEnforcer.addFive(true)).to.be.undefined;
        });

        it('return undefined if parameter is an array', () => {
            expect(mathEnforcer.addFive([])).to.be.undefined;
        });

        it('return undefined if parameter is an object', () => {
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });

        it('return result if add 5', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });

        it('return result if add 5 and parameter is negative number', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });

        it('return result if add 5 and parameter is floating-point numbers', () => {
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
        });
    });

    describe('check second finction: subtractTen', function() {

        it('return undefined if parameter is not a number', () => {
            expect(mathEnforcer.subtractTen('10')).to.be.undefined;
        });

        it('return result if subtract 10', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });

        it('return undefined if parameter is boolean', () => {
            expect(mathEnforcer.subtractTen(true)).to.be.undefined;
        });

        it('return undefined if parameter is an array', () => {
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
        });

        it('return undefined if parameter is an object', () => {
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });

        it('return result if subtract 10 and parameter is negative number', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });

        it('return result if subtract 10 and parameter is floating-point numbers', () => {
            expect(mathEnforcer.subtractTen(15.5)).to.equal(5.5);
        });

    });

    describe('check second finction: sum', function() {

        it('return undefined if the first parameter is not a number', () => {
            expect(mathEnforcer.sum('5', 5)).to.be.undefined;
        });

        it('return undefined if the second parameter is not a number', () => {
            expect(mathEnforcer.sum(5, '5')).to.be.undefined;
        });

        it('return undefined if both parameters are not a numbers', () => {
            expect(mathEnforcer.sum('5', '5')).to.be.undefined;
        });

        it('return result if both parameters are numbers', () => {
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
        });

        it('return result if parameters are negative numbers', () => {
            expect(mathEnforcer.sum(-5, -5.5)).to.equal(10.5);
        });

        it('return result parameters are floating-point numbers', () => {
            expect(mathEnforcer.sum(5.6, 5.5)).to.equal(11.1);
        });
    });
});

