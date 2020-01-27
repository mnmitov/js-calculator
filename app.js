import * as elementsModule from './elements.js';
import * as stdCalculator from './standart.js';
import * as clearModule from './clear.js';

// Calc selector
elementsModule.calcType.addEventListener('click', function (calcSelector) {
    if (elementsModule.standartCalculator.style.display === 'block' ||
        elementsModule.graphicCalculator.style.display === 'none') {
        elementsModule.calcType.textContent = 'Към стандартен калкулатор';
        elementsModule.standartCalculator.style.display = 'none';
        elementsModule.graphicCalculator.style.display = 'block';
    } else {
        elementsModule.calcType.textContent = 'Към графичен калкулатор';
        elementsModule.standartCalculator.style.display = 'block';
        elementsModule.graphicCalculator.style.display = 'none';
    }
})

// Clear calculator values and errors
elementsModule.btnStdClearCalc.addEventListener('click', clearModule.clearCalculator)

// Standart Calculator
elementsModule.btnStdCalc.addEventListener('click', stdCalculator.stdCalculator)