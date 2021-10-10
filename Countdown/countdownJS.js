const year = document.querySelector('.year');
const month = document.querySelector('.month');
const days = document.querySelector('.days');
const hours = document.querySelector('.hrs');
const minute = document.querySelector('.min');
const seconds = document.querySelector('.sec');


const countDown = () => {
    const nextDate = new Date("January 1, 2030 00:00:00").getTime();
    const todayDate = new Date().getTime();
    const gapDate = (nextDate - todayDate);

    const sec = 1000;
    const min = sec * 60;
    const hrs = min * 60;
    const day = hrs * 24;
    const mnth = day * 30;
    const years = mnth * 12;

    const leftYear = Math.floor(gapDate / years);
    year.innerHTML = leftYear;

    const leftMonth = Math.floor((gapDate % years) / mnth);
    month.innerHTML = leftMonth;

    const leftDay = Math.floor((gapDate % mnth) / day);
    days.innerHTML = leftDay;

    const leftHrs = Math.floor((gapDate % day) / hrs);
    hours.innerHTML = leftHrs;

    const leftMin = Math.floor((gapDate % hrs) / min);
    minute.innerHTML = leftMin;

    const leftSec = Math.floor((gapDate % min) / sec);
    seconds.innerHTML = leftSec;


}



setInterval(countDown, 1000);