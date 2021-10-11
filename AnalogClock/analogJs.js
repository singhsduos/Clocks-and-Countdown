// take all the element from HTML doc
const hrs = document.querySelector('.hrs');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');


const myClock = () => {
    //get time from time function
    const todaysTime = new Date();
    const hours = todaysTime.getHours() * 30;
    const minute = todaysTime.getMinutes() * 6;
    const seconds = todaysTime.getSeconds() * 6;
   

    //rotate neddle according to time
    hrs.style.transform = `rotateZ(${(hours) + (minute / 12)}deg)`;
    min.style.transform = `rotateZ(${minute}deg)`;
    sec.style.transform = `rotateZ(${seconds}deg)`;


}

// calling function in every second
setInterval(myClock, 1000);