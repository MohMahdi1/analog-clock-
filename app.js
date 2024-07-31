const hoursHand = document.querySelector(".hours");
const minutesHand = document.querySelector(".minutes");
const secondsHand = document.querySelector(".seconds");

setInterval(() => {
  let time = new Date();
  setSeconds(time.getSeconds());
  setMinutes(time.getMinutes());
  setHours(time.getHours(), time.getMinutes());
}, 1000);

function setHours(hr,min) {
    if (hr == 0) {
        hoursHand.style.transform = `rotate(${90 + min/2}deg)`;
      } else {
        hoursHand.style.transform = `rotate(${90 + hr * 30 + min/2}deg)`;
      }
}

function setMinutes(min) {
    if (min == 0) {
        minutesHand.style.transform = `rotate(90deg)`;
      } else {
        minutesHand.style.transform = `rotate(${90 + min * 6}deg)`;
      }
}

function setSeconds(sec) {
  if (sec == 0) {
    secondsHand.style.transform = `rotate(90deg)`;
  } else {
    secondsHand.style.transform = `rotate(${90 + sec * 6}deg)`;
  }
}
