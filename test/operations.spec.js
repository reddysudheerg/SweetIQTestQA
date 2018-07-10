const {add, subtract, multiply, divide} = require('../src/operations');
const assert = require('assert');

describe('Addition', () => {
    it('Should add two positive number', () => {
        assert.equal(add(1, 1), 2);
    });
    it('Should add two negative number', () => {
        assert.equal(add(-1, -1), -2);
    })
});

describe('Subtraction', () => {
    it('Should subtract two positive number', () => {
        assert.equal(subtract(1, 1), 0);
    });
    it('Should add two negative number', () => {
        assert.equal(subtract(-1, -1), 0);
    })
});

describe('Multiplication', () => {
    it('Should Multiply two positive number result in a positive number', () => {
        assert.equal(multiply(1, 1), 1);
    });
    it('Should assert multiplication of two negative number result in a positive Number', () => {
        assert.equal(multiply(-1, -1), 1);
    });
    it('Should assert multiplication of one negative with one positive number result in a negative Number', () => {
        assert.equal(multiply(1, -1), -1);
        assert.equal(multiply(-1, 1), -1);
    })
});

describe('Division', () => {
    it('Should assert division of two positive number result in a positive number', () => {
        assert.equal(divide(1, 1), 1);
    });
    it('Should assert division of two negative number result in a positive Number', () => {
        assert.equal(divide(-1, -1), 1);
    });
    it('Should assert division of one negative with one positive number result in a negative Number', () => {
        assert.equal(divide(1, -1), -1);
        assert.equal(divide(-1, 1), -1);
    })
});
