const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

  future  = Date.parse("December 20, 2023 11:30:00");
  now     = new Date();
  diff    = future - now;

  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );



let secValue = secs,
  minValue = mins,
  hourValue = hours,
  dayValue = days;

const timeFunction = setInterval(() => {
  secValue--;

  if (secValue === 0) {
    minValue--;
    secValue = 60;
  }
  if (minValue === 0) {
    hourValue--;
    minValue = 60;
  }
  if (hourValue === 0) {
    dayValue--;
    hourValue = 24;
  }

  if (dayValue === 0) {
    clearInterval(timeFunction);
  }
  seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
  minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
  hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
  days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000); //1000ms = 1s


///


