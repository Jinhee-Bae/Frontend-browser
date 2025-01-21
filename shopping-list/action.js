const product = document.querySelector('.input'); // input field
const add = document.querySelector('.button');
const item = document.getElementById('item'); // item of shopping list
const trash = document.getElementById('trash');// trash icon



product.addEventListener("input", updateValue);
function updateValue(e) {
  item.innerHTML = product.value;
  item.style.display = 'flex';
}
