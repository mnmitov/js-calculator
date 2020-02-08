import * as mathModule from './math-functions.js';
import * as e from './elements.js';

let numberOne = e.numberOneInput.value;
let numberTwo = e.numberTwoInput.value;
let expression = e.expressionInput.value;

export function stdCalculator() {
    numberOne = e.numberOneInput.value;
    numberTwo = e.numberTwoInput.value;
    expression = e.expressionInput.value;

    if (numberOne == '' || numberOne == null || numberOne == NaN) {
        e.numOneError.textContent = `Въведи число!`;
    }
    if (numberTwo == '' || numberTwo == null || numberTwo == NaN) {
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
        e.expError.textContent = `Посочи оператор!`;
    }

    stdCalcHistory();
}

function stdCalcHistory() {
    numberOne = e.numberOneInput.value;
    numberTwo = e.numberTwoInput.value;
    expression = e.expressionInput.value;

    let count = 0;
    let tag = document.getElementsByClassName('list-group-item list-group-item-action li-tag lead');
    for (let i = 1; i <= tag.length; i++) {
        count++
    };

    let total = e.resultStd.textContent.replace('Резултат: ', '');
    const time = new Date().toLocaleTimeString();

    if (expression != 'Избери оператор') {
        if (e.history.innerHTML == 'Няма история') {
            e.history.textContent = '';
        }
        let li = document.createElement('li');
        e.history.prepend(li);
        li.classList = 'list-group-item list-group-item-action li-tag lead';
        let content =
            ['Ред ' + count + "@" + time + ' <> ' + ' '
                + numberOne + ' ' + ' ' + expression + ' ' + numberTwo + ' = ' + total];
        li.textContent = content;
    }
};  