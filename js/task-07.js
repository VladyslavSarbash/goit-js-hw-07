const textSizeRef = document.querySelector('#text');
const rangeValueRef = document.querySelector('#font-size-control');

const fzValue = function () {
  const rangeValue = rangeValueRef.value;
  textSizeRef.style.fontSize = `${rangeValue}px`;
};

rangeValueRef.addEventListener('input', fzValue);

// const inputRef = document.querySelector('#validation-input');

// const changeNumber = function ({ target: { value } }) {
//   value.length === +inputRef.dataset.length
//     ? togleClass('valid', 'invalid')
//     : togleClass('invalid', 'valid');
// };

// function togleClass(add, rem) {
//   inputRef.classList.add(add);
//   inputRef.classList.remove(rem);
// }

// inputRef.addEventListener('blur', changeNumber);
