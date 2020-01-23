const numberOneInput = document.getElementById('number-one');
const numberTwoInput = document.getElementById('number-two');
const expressionInput = document.getElementById('expression');
const result = document.getElementById('result');
const btn = document.getElementById('btn');
const btnClear = document.getElementById('btn-clear');
const numOneError = document.getElementById('numone-error');
const numTwoError = document.getElementById('numtwo-error');
const expError = document.getElementById('expression-error');
btn.addEventListener('click', calculate)


function calculate() {
    btnClear.addEventListener('click', clearCalculator)
    let numberOne = numberOneInput.value;
    let expression = expressionInput.value;
    let numberTwo = numberTwoInput.value;

    if (expression == '+') {
        sum();
    } else if (expression == '/') {
        divide();
    } else if (expression == '*') {
        multiply();
    } else if (expression == '-') {
        subtract();
    } else {
        expError.textContent = `Избери един от следните оператори: +, -, / или *`;
    }

    if (numberOne == "" || numberOne == null) {
        numOneError.textContent = `Въведи число!`;
    }
    if (numberTwo == "" || numberTwo == null) {
        numTwoError.textContent = `Въведи число!`;
    }


    function sum() {
        let total = eval(numberOne) + eval(numberTwo);
        clearErrors()
        result.textContent = `Резултат: ${total}`;
    }

    function subtract() {
        let total = numberOne - numberTwo;
        clearErrors()
        result.textContent = `Резултат: ${total}`;
    }

    function divide() {
        let total = numberOne / numberTwo;
        clearErrors()
        result.textContent = `Резултат: ${total}`;
    }

    function multiply() {
        let total = numberOne * numberTwo;
        clearErrors()
        result.textContent = `Резултат: ${total}`;
    }

    function clearCalculator() {
        result.textContent = '';
        numberOneInput.value = '';
        numberTwoInput.value = '';
        expressionInput.value = '';
        expError.textContent = '';
        numOneError.textContent = '';
        numTwoError.textContent = '';
    }

    function clearErrors() {
        expError.textContent = '';
        numOneError.textContent = '';
        numTwoError.textContent = '';
    }
}

