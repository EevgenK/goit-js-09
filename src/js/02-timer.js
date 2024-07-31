import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import { convertMs } from './helpers/convertMs';
// import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';

const refs = {
  button: document.querySelector('button'),
  selector: document.querySelector('#datetime-picker'),
  timerValues: document.querySelectorAll('.value'),
};

refs.button.disabled = true;
let intervalId = null;
let inputDate = 0;

Notiflix.Notify.init({
  width: '500px',
  fontSize: '22px',
  failure: {
    background: '#80cbc4',
    notiflixIconColor: 'rgba(244,67,54)',
  },
});
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    inputDate = selectedDates.getTime();

    if (inputDate <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.button.disabled = false;
    }
  },
};
flatpickr(refs.selector, options);
refs.button.addEventListener('click', onBtnClick);

function onBtnClick() {
  intervalId = setInterval(() => {
    const currentTime = Date.now();
    let dateDiference = inputDate - currentTime;
    let dates = convertMs(dateDiference);
    for (let i = 0; i < refs.timerValues.length; i++) {
      refs.timerValues[i].textContent = Object.entries(dates)[i][1];
    }
    if (dateDiference < 1000) {
      clearInterval(intervalId);
    }
  }, 1000);
  refs.button.disabled = true;
}
