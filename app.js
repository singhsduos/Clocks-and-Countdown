const weeks = document.getElementById('weeks');
const days = document.getElementById('day');
const months = document.getElementById('months');
const year = document.getElementById('year');

const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const APM = document.getElementById('am-pm');

let monthsName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let weekDayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];


clockStart();

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
    setTimeout(clockStart, 1000);
}



function updateClock(dWeek, dNum, dMonth, dYear, tHrs, tMin, tSec) {

    let tAPM = "AM";

    if (tHrs > 12) {
        tHrs = (tHrs - 12);
        tAPM = "PM";

    }

    for (let i = 1; i <= weekDayName.length; i++) {
        if (i === dWeek) {
            weeks.innerHTML = weekDayName[i];
        }
    }

    for (let j = 1; j <= monthsName.length; j++) {
        if (j === dMonth) {
            months.innerHTML = monthsName[j];
        }
    }

    days.innerHTML = dNum;
    year.innerHTML = dYear;

    hrs.innerHTML = tHrs;
    min.innerHTML = tMin;
    sec.innerHTML = tSec;
    APM.innerHTML = tAPM;
}


