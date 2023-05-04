const companyAdministration = require('./companyAdministration');
const { expect } = require('chai');

describe('Check three functions: hiringEmployee, calculateSalary, firedEmployee', function () {

    describe('Check first function hiringEmployee', function () {

        it('check is second parameter is equal to: Programer', () => {
            expect(() => companyAdministration.hiringEmployee('dog', 'Programm', 2)).to.throw(
                "We are not looking for workers for this position.");
        });

        it('check is experience is 3 years', () => {
            expect(companyAdministration.hiringEmployee('Dido', 'Programmer', 3)).to.equal('Dido was successfully hired for the position Programmer.');
        });

        it('check is experience more than 3 years ', () => {
            expect(companyAdministration.hiringEmployee('Dido', 'Programmer', 5)).to.equal('Dido was successfully hired for the position Programmer.');
        });

        it('check is experience less than 3 years ', () => {
            expect(companyAdministration.hiringEmployee('Dido', 'Programmer', 2)).to.equal('Dido is not approved for this position.');
        });

    });

    describe('Check three functions: calculateSalary', function () {

        it('check is parameter is negative number', () => {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw("Invalid hours");
        });

        it('check is parameter is not a number', () => {  
            expect(() => companyAdministration.calculateSalary('dog')).to.throw("Invalid hours");
        });

        it('check is parameter is not a number', () => {  
            expect(() => companyAdministration.calculateSalary([])).to.throw("Invalid hours");
        });

        it('check is parameter is not a number', () => {  
            expect(() => companyAdministration.calculateSalary(null)).to.throw("Invalid hours");
        });

        it('check is parameter is not a number', () => {  
            expect(() => companyAdministration.calculateSalary(true)).to.throw("Invalid hours");
        });

        it('check is parameter is not a number', () => {  
            expect(() => companyAdministration.calculateSalary({})).to.throw("Invalid hours");
        });

        it('check is result is correct', () => {  
            expect(companyAdministration.calculateSalary(2)).to.equal(30);
        });

        it('check is shours are more than 160', () => {  
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        });

    });

    describe('Check third function: firedEmployee', function () {

        it('check is not correct index', () => {  
            expect(() => companyAdministration.firedEmployee(['anna', 'jen', 'pen'], 3)).to.throw("Invalid input");
        });

        it('check is not correct index', () => {  
            expect(() => companyAdministration.firedEmployee(['anna', 'jen', 'pen'], -1)).to.throw("Invalid input");
        });

        it('check is first parameter is not array', () => {  
            expect(() => companyAdministration.firedEmployee('anna', 0)).to.throw("Invalid input");
        });

        it('check is not correct index', () => {  
            expect(() => companyAdministration.firedEmployee(['anna', 'jen', 'pen'], 'men')).to.throw("Invalid input");
        });

        it('check if first parameter is object', () => {  
            expect(() => companyAdministration.firedEmployee({}, 'men')).to.throw("Invalid input");
        });

        it('check are not correct both parameters', () => {  
            expect(() => companyAdministration.firedEmployee({}, {})).to.throw("Invalid input");
        });

        it('check is not correct index', () => {  
            expect(() => companyAdministration.firedEmployee(['anna', 'jen', 'pen'], null)).to.throw("Invalid input");
        });

        it('check is not correct result', () => {  
            expect(companyAdministration.firedEmployee(['anna', 'jen', 'pen'], 1)).to.equal('anna, pen');
        });
    });
});