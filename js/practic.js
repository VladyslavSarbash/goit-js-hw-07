const inputRef = document.querySelector('#validation-input');

const changeNumber = function ({ target: { value } }) {
  value.length === +inputRef.dataset.length
    ? togleClass('valid', 'invalid')
    : togleClass('invalid', 'valid');
};

function togleClass(add, rem) {
  inputRef.classList.add(add);
  inputRef.classList.remove(rem);
}

inputRef.addEventListener('blur', changeNumber);
