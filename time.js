const display = document.createElement('div');
const hour = document.createElement('span');
const minute = document.createElement('span');
const second = document.createElement('span');
const startBtn = document.createElement('button');
const stopBtn = document.createElement('button');

document.body.append(display);

startBtn.textContent = '시작';
stopBtn.textContent = '정지';

hour.textContent = '00';
minute.textContent = '00';
second.textContent = '00';

display.append(hour, minute, second, startBtn, stopBtn);

let timer = null;

startBtn.addEventListener('click', () => {
  if (timer) {
    return;
  } else {
    timer = setInterval ((() => {
      let sec = parseInt(second.textContent);
      sec++; 
      if(sec >= 60) {
        sec = 0;
      }
      second.textContent = sec < 10 ? `0${sec}` : sec;
    }),1000);
  }
});

// stopBtn.addEventListener('click', () => {
//   timer.
// })




