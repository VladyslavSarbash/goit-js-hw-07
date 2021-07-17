const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const inputUserName = function (event) {
  outputRef.textContent = event.currentTarget.value;
  if (outputRef.textContent.trim() === '') {
    outputRef.textContent = 'незнакомец';
  }
};

inputRef.addEventListener('input', inputUserName);

// const nameInputRef = document.querySelector('#name-input');
// const nameOutputRef = document.querySelector('#name-output');
// const changeName = function () {
//   nameOutputRef.textContent = nameInputRef.value.trim()
//     ? nameInputRef.value
//     : 'незнакомец';
// };

// nameInputRef.addEventListener('input', changeName);
