const rgbToHexColor = require('./rgbToHex');
const { expect } = require('chai');

describe('tests for RGB colors to HEX', function() {

    it('return #100C0D for RGB(16,12,13', () => {
        expect(rgbToHexColor(16, 12, 13)).to.equal('#100C0D');
    });

    it('return lowest possible input: zero', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('return highest possible input: 255', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('return undefined input with negative number of first number', () => {
        expect(typeof rgbToHexColor(-16, 12, 13)).to.equal('undefined');
    });
    
    it('return undefined input with negative number of second number', () => {
        expect(typeof rgbToHexColor(16, -12, 13)).to.equal('undefined');
    });
    
    it('return undefined input with negative number of third number', () => {
        expect(typeof rgbToHexColor(16, 12, -13)).to.be.undefined;
    });

    it('return invalid input out of range first number', () => {
        expect(typeof rgbToHexColor(256, 12, 13)).to.equal('undefined');
    });

    it('return invalid input out of range second number', () => {
        expect(typeof rgbToHexColor(16, 256, 13)).to.equal('undefined');
    });

    it('return invalid input out of range third number', () => {
        expect(typeof rgbToHexColor(16, 12, 256)).to.equal('undefined');
    });

    it('return invalid input out of range', () => {
        expect(typeof rgbToHexColor('256', 12, 13)).to.equal('undefined');
    });
    
    it('return invalid input with fractional numbers', () => {
        expect(typeof rgbToHexColor(2.13, 12, 13)).to.equal('undefined');
    });

    it('return undefined if no input', () => {
        expect(rgbToHexColor()).to.be.undefined;
    });
});