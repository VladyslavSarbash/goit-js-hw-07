const categoriesRef = document.querySelector('#categories');
const categoriesItemRef = document.querySelectorAll('.item');

console.log(`В списке ${categoriesRef.children.length} категории.`)

categoriesItemRef.forEach(elem =>  {
  console.log(`Категории: ${elem.firstElementChild.outerText}`) 
  console.log(`Количество элементов: ${elem.lastElementChild.children.length}`)
})

// const quantityCategories = function (ref) {
//   return `В списке ${ref.children.length} категории.`;
// };

// console.log(quantityCategories(categoriesRef));

// const quantityItemCategories = function (ref) {
//   ref.forEach(elem =>  {
//     console.log(`Категории: ${elem.firstElementChild.outerText}`) 
//     console.log(`Количество элементов: ${elem.lastElementChild.children.length}`)
//   });
// };

// quantityItemCategories(categoriesItemRef);
