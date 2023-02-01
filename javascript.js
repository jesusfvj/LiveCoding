const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const miliseconds = document.querySelector("#miliseconds");

setInterval(
    function countDown(){
        const todayDate = new Date().getTime();
        const lastDate = new Date("MAY 25, 2023, 23:59:59 GMT+01:00").getTime();
        const differenceMiliseconds = lastDate - todayDate;
        const differenceInDays = Math.floor(differenceMiliseconds/(1000*3600*24));
        const hoursLeft = Math.floor(((differenceMiliseconds / 1000) % (3600*24)) / 3600)
        const minutesLeft = Math.floor(((differenceMiliseconds / 1000) % (3600)) / 60);
        const secondsLeft = Math.floor(((differenceMiliseconds / 1000) % (60)));
        const milisecondsLeft = Math.floor((differenceMiliseconds) % (1000));
        days.textContent = differenceInDays;
        hours.textContent = hoursLeft;
        minutes.textContent = minutesLeft;
        seconds.textContent = secondsLeft;
        miliseconds.textContent = milisecondsLeft;
    }
, 100);

countDown();