import * as e from './elements.js';

export function gxCalc() {
    let input = e.expressionOuput;
    let output = e.resultOutput;

    const operators = ['+', '-', '*', '/'];

    e.gxCalcInput.addEventListener('click', (e) => {
        const value = e.target.value;
        if (value === 'Clear') {
            clearGxCalc();
        } else if (operators.includes(value)) {
            addOperator(value);
        } else if (value === '=') {
            result();
        } else {
            addNumber(value);
        }
    });

    function result() {
        let expField = input.textContent
            .split(' ')
            .filter(x => x !== '');

        expField.length === 3
            ? calculate(expField[0], expField[1], expField[2])
            : output.textContent = NaN;
    }

    function addNumber(value) {
        input.textContent += value;
    }

    function addOperator(value) {
        input.textContent += ` ${value} `;
    }

    e.clearGxCalc.addEventListener('click', clearGxCalc)
    function clearGxCalc() {
        output.textContent = '';
        input.textContent = '';
    }

    function calculate(x, operator, y) {
        x = Number(x);
        y = Number(y);

        let operations = {
            '+': x + y,
            '-': x - y,
            '*': x * y,
            '/': x / y,
        };

        let sum = operations[operator];
        output.textContent = sum;
    }
}