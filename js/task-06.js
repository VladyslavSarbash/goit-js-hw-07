const inputRef = document.querySelector('#validation-input');
const minInputValue = inputRef.getAttribute('data-length');

const currentInputValue = function (event) {
  if (event.target.value.length === +minInputValue) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
};

inputRef.addEventListener('blur', currentInputValue);

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