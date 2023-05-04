const bookSelection = require('./bookSelection');
const { expect } = require('chai');

describe('Check three functions: isGenreSuitable, isItAffordable, suitableTitles', function () {

    describe('Check first function isGenreSuitable', function () {

        it('check is genre is Thriller and age 12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(
                "Books with Thriller genre are not suitable for kids at 12 age");
        });

        it('check is genre is Thriller and age less than 12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal(
                "Books with Thriller genre are not suitable for kids at 11 age");
        });

        it('check is genre is Horror and age 12', () => {
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(
                "Books with Horror genre are not suitable for kids at 12 age");
        });

        it('check is genre is Horror and age less than 12', () => {
            expect(bookSelection.isGenreSuitable('Horror', 11)).to.equal(
                "Books with Horror genre are not suitable for kids at 11 age");
        });

        it('check is genre different than Thtiller and Horror and age more than 12', () => {
            expect(bookSelection.isGenreSuitable('Action', 13)).to.equal(
                "Those books are suitable");
        });

        it('check is genre different than Thtiller and Horror and age more than 12', () => {
            expect(bookSelection.isGenreSuitable('Thtiller', 13)).to.equal(
                "Those books are suitable");
        });

        it('check is genre different than Thtiller and Horror and age more than 12', () => {
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal(
                "Those books are suitable");
        });

    });

    describe('Check second function isItAffordable', function () {

        it('check is budget is not enough to buy book', () => {
            expect(bookSelection.isItAffordable(5, 4)).to.equal(
                "You don't have enough money");
        });

        it('check is budget is enough to buy book', () => {
            expect(bookSelection.isItAffordable(5, 5)).to.equal(
                "Book bought. You have 0$ left");
        });

        it('check is budget is enough to buy book', () => {
            expect(bookSelection.isItAffordable(5, 10)).to.equal(
                "Book bought. You have 5$ left");
        });

        it('check is first parameter not a number', () => {
            expect(() => bookSelection.isItAffordable('dog', 10)).to.throw(
                "Invalid input");
        });

        it('check is both parameters not a number', () => {
            expect(() => bookSelection.isItAffordable('dog', 'men')).to.throw(
                "Invalid input");
        });

        it('check is second parameter not a number', () => {
            expect(() => bookSelection.isItAffordable(5, 'men')).to.throw(
                "Invalid input");
        });

        it('check is both parameters not a number', () => {
            expect(() => bookSelection.isItAffordable([], [])).to.throw(
                "Invalid input");
        });

        it('check is first parameter not a number', () => {
            expect(() => bookSelection.isItAffordable([], 10)).to.throw(
                "Invalid input");
        });

        it('check is both parameters not a number', () => {
            expect(() => bookSelection.isItAffordable({}, 10)).to.throw(
                "Invalid input");
        });

        it('check is both parameters not a number', () => {
            expect(() => bookSelection.isItAffordable(true, 10)).to.throw(
                "Invalid input");
        });

        

    });

    describe('Check third function suitableTitles', function () {

        it('check is first parameter not an array', () => {
            expect(() => bookSelection.suitableTitles('book', 'Criminal')).to.throw(
                "Invalid input");
        });

        it('check is second parameter not a string', () => {
            expect(() => bookSelection.suitableTitles('book', 10)).to.throw(
                "Invalid input");
        });

        it('check is second parameter not a string', () => {
            expect(() => bookSelection.suitableTitles('book', [])).to.throw(
                "Invalid input");
        });

        it('check is second parameter not a string', () => {
            expect(() => bookSelection.suitableTitles('book', {})).to.throw(
                "Invalid input");
        });

        it('check is second parameter not a string', () => {
            expect(() => bookSelection.suitableTitles({}, 'Criminal')).to.throw(
                "Invalid input");
        });

        it('check is second parameter not a string', () => {
            expect(() => bookSelection.suitableTitles(10, 'Criminal')).to.throw(
                "Invalid input");
        });

        it('check is genre is same like wanted genre', () => {

            let input = [{ title: 'The Da Vinci Code', genre: 'Thriller' }, { title: 'Bond', genre: 'Thriller' }];
            let output = ['The Da Vinci Code', 'Bond']
            expect(bookSelection.suitableTitles(input, 'Thriller').join(' ')).to.equal(
                output.join(' '));
        });


    });

});

