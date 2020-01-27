import * as mathModule from './math-functions.js';
import * as e from './elements.js';

export function stdCalculator() {
    const numberOne = e.numberOneInput.value;
    const numberTwo = e.numberTwoInput.value;
    const expression = e.expressionInput.value;

    if (numberOne == '' || numberOne == null) {
        e.numOneError.textContent = `Въведи число!`;
    }
    if (numberTwo == '' || numberTwo == null) {
        e.numTwoError.textContent = `Въведи число!`;
    }

    if (expression == '+') {
        mathModule.sum(numberOne, numberTwo);
    } else if (expression == '/') {
        mathModule.divide(numberOne, numberTwo);
    } else if (expression == '*') {
        mathModule.multiply(numberOne, numberTwo);
    } else if (expression == '-') {
        mathModule.subtract(numberOne, numberTwo);
    } else {
        e.expError.textContent = `Избери един от следните оператори: +, -, / или *`;
    }
}