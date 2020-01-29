import * as e from './elements.js';
import * as stdCalculator from './standart.js';
import * as clearModule from './clear.js';
import * as gxCalc from './graphic.js';

// Calc selector
e.calcType.addEventListener('click', function (calcSelector) {
    if (e.standartCalculator.style.display === 'block' ||
        e.graphicCalculator.style.display === 'none') {
        e.calcType.textContent = 'Към стандартен калкулатор';
        e.standartCalculator.style.display = 'none';
        e.graphicCalculator.style.display = 'block';
        e.title.textContent = 'Графичен калкулатор';
    } else {
        e.calcType.textContent = 'Към графичен калкулатор';
        e.standartCalculator.style.display = 'block';
        e.graphicCalculator.style.display = 'none';
        e.title.textContent = 'Стандартен калкулатор';
    }
})

// Clear calculator values and errors
e.btnStdClearCalc.addEventListener('click', clearModule.clearCalculator);

// Standart Calculator
e.btnStdCalc.addEventListener('click', stdCalculator.stdCalculator);

// GraphiX Calculator
gxCalc.gxCalc();