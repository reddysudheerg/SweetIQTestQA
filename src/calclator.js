const {add, subtract, multiply, divide} = require('./operations');
const {isNumberValid, isOperatorValid} = require('./validator');
const allOperators = ['*', '+', '-', '/'];

const calculator = (operator, number1, number2) => {
    let returnValue;

    if (isNumberValid(number1, number2)) {
        console.log('LOG: Numeric Validation Done Success');

        switch (operator) {
            case '+':
                returnValue = add(number1, number2);
                break;

            case '-':
                returnValue = subtract(number1, number2);
                break;

            case '*':
                returnValue = multiply(number1, number2);
                break;

            case '/':
                returnValue = divide(number1, number2);
                break;
            default:
                throw new Error(`ERROR: ${operator} is not used, please use any of ${allOperators}`);
        }
    } else {
        throw new Error(`LOG: validation operation failed for ${operator}, ${number1}, ${number2}
                      Please check and renter`);
    }

    return returnValue;
};

module.exports = {calculator};
