const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let timeId = null;

refs.startBtn.addEventListener('click', onStartBtnclick);
refs.stopBtn.addEventListener('click', onStopBtnclick);

function onStartBtnclick() {
  timeId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.startBtn.disabled = true;
}
function onStopBtnclick() {
  clearInterval(timeId);
  refs.startBtn.disabled = false;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
