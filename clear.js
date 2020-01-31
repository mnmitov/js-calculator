import * as e from './elements.js';

export function clearCalculator() {
    e.resultStd.textContent = 'Резултат: 0';
    e.numberOneInput.value = '';
    e.numberTwoInput.value = '';
    e.expressionInput.value = 'Избери оператор';
    e.expError.textContent = '';
    e.numOneError.textContent = '';
    e.numTwoError.textContent = '';
}

export function clearErrors() {
    e.expError.textContent = '';
    e.numOneError.textContent = '';
    e.numTwoError.textContent = '';
}

export function clearHistory() {
    $(e.history).empty();
    e.history.textContent = 'Няма история'
}