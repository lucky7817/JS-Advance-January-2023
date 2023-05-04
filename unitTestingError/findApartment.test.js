const findNewApartment = require('./findApartment');
const { expect } = require('chai');

describe('Check three functions: isGoodLocation, isLargeEnough, isItAffordable', function () {

    describe('Check first function isGoodLocation', function () {

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isGoodLocation(5, 'dog')).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isGoodLocation(5, 5)).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isGoodLocation([], true)).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isGoodLocation({}, true)).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isGoodLocation([], [])).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isGoodLocation(true, true)).to.throw(
                "Invalid input!");
        });

        it('check tawn is correct', () => {
            expect(findNewApartment.isGoodLocation('Yambol', true)).to.equal('This location is not suitable for you.');
        });

        it('check second param is false', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
        });

        it('check second param is false', () => {
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.');
        });

        it('check second param is false', () => {
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.');
        });

        it('check second param is true', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
        });

        it('check second param is true', () => {
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
        });

        it('check second param is true', () => {
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
        });

    });

    describe('Check first function isLargeEnough', function () {

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isLargeEnough('dog', 'men')).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isLargeEnough(5, 'men')).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isLargeEnough({}, 'men')).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isLargeEnough('dog', 5)).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isLargeEnough('dog', true)).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isLargeEnough([], [])).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isLargeEnough([20, 30, 40], {})).to.throw(
                "Invalid input!");
        });

        it('check second param is true', () => {
            expect(findNewApartment.isLargeEnough([40, 20, 10], 20)).to.equal('40, 20');
        });

        it('check second param is true', () => {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 20)).to.equal('40, 50, 60');
        });
    });

    describe('Check first function isItAffordable', function () {

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isItAffordable('dog', 'men')).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isItAffordable([], 'men')).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isItAffordable([], [])).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isItAffordable({}, {})).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isItAffordable(10, 'men')).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isItAffordable('dog', 10)).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isItAffordable(0, 0)).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isItAffordable(-1, -2)).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isItAffordable(10, -1)).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isItAffordable(-1, 10)).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isItAffordable(true, 'men')).to.throw(
                "Invalid input!");
        });

        it('check parameters is correct types', () => {
            expect(() => findNewApartment.isItAffordable(10, true)).to.throw(
                "Invalid input!");
        });

        it('check second param is true', () => {
            expect(findNewApartment.isItAffordable(20, 10)).to.equal(`You don't have enough money for this house!`);
        });

        it('check second param is true', () => {
            expect(findNewApartment.isItAffordable(20, 20)).to.equal('You can afford this home!');
        });

        it('check second param is true', () => {
            expect(findNewApartment.isItAffordable(20, 30)).to.equal('You can afford this home!');
        });

    });

});