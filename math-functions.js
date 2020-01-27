import * as clearModule from './clear.js';
import * as elementsModule from './elements.js';

export function sum(numberOne, numberTwo) {
    const total = eval(numberOne) + eval(numberTwo);
    clearModule.clearErrors()
    elementsModule.result.textContent = `Резултат: ${total}`;
    elementsModule.result.classList = `glyphicon glyphicon-ok-sign`;
}

export function subtract(numberOne, numberTwo) {
    const total = numberOne - numberTwo;
    clearModule.clearErrors()
    elementsModule.result.textContent = `Резултат: ${total}`;
}

export function multiply(numberOne, numberTwo) {
    const total = numberOne * numberTwo;
    clearModule.clearErrors()
    elementsModule.result.textContent = `Резултат: ${total}`;
}

export function divide(numberOne, numberTwo) {
    const total = numberOne / numberTwo;
    clearModule.clearErrors()
    elementsModule.result.textContent = `Резултат: ${total}`;
}