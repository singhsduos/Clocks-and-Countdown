// get all elements from doc
const weeks = document.getElementById('weeks');
const days = document.getElementById('day');
const months = document.getElementById('months');
const year = document.getElementById('year');

const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const APM = document.getElementById('am-pm');

let monthsName = [
    "January,",
    "February,",
    "March,",
    "April,",
    "May,",
    "June,",
    "July,",
    "August,",
    "September,",
    "October,",
    "November,",
    "December,"
];

let weekDayName = [
    "Sunday,",
    "Monday,",
    "Tuesday,",
    "Wednesday,",
    "Thursday,",
    "Friday,",
    "Saturday,",
];


clockStart();

// function for getting current time
function clockStart() {
    let currentdate = new Date();
    let dWeek = currentdate.getDay();
    let dNum = currentdate.getDate();
    let dMonth = currentdate.getMonth();
    let dYear = currentdate.getFullYear();

    let tHrs = currentdate.getHours();
    let tMin = currentdate.getMinutes();
    let tSec = currentdate.getSeconds();

    updateClock(dWeek, dNum, dMonth, dYear, tHrs, tMin, tSec);
    // calling function every second
    setTimeout(clockStart, 1000);
}


// updating time in HTML Doc file
function updateClock(dWeek, dNum, dMonth, dYear, tHrs, tMin, tSec) {

    let tAPM = "AM";

    // condition for changing AM and PM
    if (tHrs > 12) {
        tHrs = (tHrs - 12);
        tAPM = "PM";

    }

    // adding zero as tenth digit in single-digit time
    function checkNum(data) {
        if (data < 10) {
            data = '0' + data;
        }
        return data;
    }

    // loop for converting weekdays number as weekdays name
    for (let i = 1; i <= weekDayName.length; i++) {
        if (i === dWeek) {
            weeks.innerHTML = weekDayName[i];
        }
    }
    // loop for converting months number as months name
    for (let j = 1; j <= monthsName.length; j++) {
        if (j === dMonth) {
            months.innerHTML = monthsName[j];
        }
    }

    // updating days and time in HTML Doc
    days.innerHTML = checkNum(dNum);
    year.innerHTML = dYear;

    hrs.innerHTML = checkNum(tHrs);
    min.innerHTML = checkNum(tMin);
    sec.innerHTML = checkNum(tSec);
    APM.innerHTML = tAPM;
}


