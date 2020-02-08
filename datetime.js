import * as dashboard from './dashboardElements.js';


export function showDateAndTime() {
    const dateTime = new Date();

    function greetDay() {
        let dayTime = '';
        if (dateTime.getHours() > 23) {
            dayTime = 'Лягай да спиш! :)'
        } else if (dateTime.getHours() > 18) {
            dayTime = 'Добър вечер!'
        } else if (dateTime.getHours() > 10) {
            dayTime = 'Добър ден!'
        } else if (dateTime.getHours() > 5) {
            dayTime = 'Добро утро!'
        }
        return dayTime;
    }

    let monthNames = [
        "Януари,", "Февруари,", "Март,",
        "Април,", "Май,", "Юни,", "Юли,",
        "Август,", "Септември,", "Октомври,",
        "Ноември,", "Декември,"
    ];

    let day = dateTime.getDate();
    let monthIndex = dateTime.getMonth();
    let year = dateTime.getFullYear();
    let hours = dateTime.getHours();
    let mins = dateTime.getMinutes();
    let secs = dateTime.getSeconds();

    if (day === 1 || day === 21 || day === 31) {
        day = day + '-ви'
    } else if (day === 2 || day === 22) {
        day = day + '-ри'
    } else if (day === 7 || day === 8 || day === 27 || day === 28) {
        day = day + '-ми'
    } else {
        day = day + '-ти'
    }

    let result = greetDay()+ ' Днес е ' + day + ' ' + monthNames[monthIndex]
        + ' ' + year + ' г., ' + hours + ':' + mins.toString().padStart(2, '0')
        + ':' + secs.toString().padStart(2, '0');

    dashboard.dateField.textContent = result;
} setInterval(showDateAndTime, 1000)





