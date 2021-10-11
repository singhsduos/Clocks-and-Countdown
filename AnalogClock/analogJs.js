const hrs = document.querySelector('.hrs');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');


const myClock = () => {
    const todaysTime = new Date();
    const hours = todaysTime.getHours() * 30;
    const minute = todaysTime.getMinutes() * 6;
    const seconds = todaysTime.getSeconds() * 6;

    hrs.style.transform = `rotateZ(${(hours) + (minute / 12)}deg)`;
    min.style.transform = `rotateZ(${minute}deg)`;
    sec.style.transform = `rotateZ(${seconds}deg)`;


}


setInterval(myClock, 1000);