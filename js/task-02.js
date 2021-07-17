const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

// const createItemList = function (items) {
//   for (let item of items) {
//     const ingredientsItem = document.createElement('li');
//     ingredientsItem.textContent = item;

//     ingredientsRef.appendChild(ingredientsItem);
//   }
// };

// createItemList(ingredients);

const markup = ingredients.map(item => {
  const newTeg = document.createElement('li');
  newTeg.innerHTML = `<p>${item}</p>`;
  return newTeg;
});

ingredientsRef.append(...markup);
