import Notiflix from 'notiflix';
Notiflix.Notify.init({
  failure: {
    textColor: 'rgba(242, 10, 33, 1)',
    background: '#80cbc4',
    notiflixIconColor: 'rgba(242, 10, 33, 1)',
  },
  success: {
    textColor: 'rgba(6, 20, 214, 1)',
    background: '#80cbc4',
    notiflixIconColor: 'rgba(6, 20, 214, 1)',
  },
});
const form = document.querySelector('.form');
form.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  if (e.target === form.lastElementChild) {
    e.preventDefault();
    const {
      delay: { value: delay },
      step: { value: step },
      amount: { value: amount },
    } = form.elements;

    let position = 1;
    let delayCounter = Number(delay);
    while (position <= Number(amount)) {
      createPromise(position, delayCounter)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        });
      delayCounter += Number(step);
      position += 1;
    }
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}
