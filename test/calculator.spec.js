const {calculator} = require('../src/calclator');
const assert = require('assert');

describe('Calculator test', () => {
        it('Should sum 1 and 2, return value 3', () => {
            assert.equal(calculator('+', 1, 2), 3);
        });
        it('Should subtract 5 and 4, return value 1', () => {
            assert.equal(calculator('-', 5, 4), 1);
        });
        it('Should multiply 2 and 2, return value 4', () => {
            assert.equal(calculator('*', 2, 2), 4);
        });
        it('Should divide 4 and 2, return value 2', () => {
            assert.equal(calculator('/', 4, 2), 2);
        });
        context('Error Validation', () => {
            it('Should throw error when unsupported operator is passed', () => {
                assert.throws(() => { calculator('.', 1, 1); }, Error );
                assert.throws(() => { calculator(1, 1, 1); }, Error );
            });
            it('Should throw error when unsupported numeric datatype is passed', () => {
                assert.throws(() => { calculator('.', 1, '1'); }, Error );
                assert.throws(() => { calculator('.', '1', 1); }, Error );
            });
        })
});
