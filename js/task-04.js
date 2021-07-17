const incrementRef = document.querySelector('[data-action="increment"]');
const decrementRef = document.querySelector('[data-action="decrement"]');
const totalValueRef = document.querySelector('#value');

let counterValue = 0;

const incrementValue = function () {
  counterValue += 1;
  totalValueRef.textContent = counterValue;
};

const decrementValue = function () {
  counterValue -= 1;
  totalValueRef.textContent = counterValue;
};

incrementRef.addEventListener('click', incrementValue);
decrementRef.addEventListener('click', decrementValue);
