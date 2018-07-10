const {isOperatorValid, isNumberValid} = require('../src/validator');
const assert = require('assert');

describe('Numeric Validator', () => {
    it('Should return bool true when valid numericals are passed', () => {
        assert.equal(isNumberValid(-1, -1), true);
        assert.equal(isNumberValid(1, 1), true);
        assert.equal(isNumberValid(+1, +1), true);
    });
    it('Should return bool false when nonnumericals are passed', () => {
        assert.equal(isNumberValid('*', '*'), false);
        assert.equal(isNumberValid(undefined, 1), false);
    });
    context('Type Conversion test', () => {
        it('Should return bool false when a string numericals are passed ', () => {
            assert.equal(isNumberValid(1, '1'), false);
            assert.equal(isNumberValid('1', 1), false);
        });
    })
});
