import * as elementsModule from './elements.js';

export function clearCalculator() {
    elementsModule.result.textContent = '';
    elementsModule.numberOneInput.value = '';
    elementsModule.numberTwoInput.value = '';
    elementsModule.expressionInput.value = '';
    elementsModule.expError.textContent = '';
    elementsModule.numOneError.textContent = '';
    elementsModule.numTwoError.textContent = '';
}

export function clearErrors() {
    elementsModule.expError.textContent = '';
    elementsModule.numOneError.textContent = '';
    elementsModule.numTwoError.textContent = '';
}