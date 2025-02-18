/* consider the following:
as a object orient Programming language, make a good use of nasting. put createItem function inside of onAdd() function. therefore createItem() function can only used through onAdd() funtion.*/

const addBtn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');
const items = document.querySelector('.items');

function onAdd() {
  // 1. take the input value from the user
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }

  // 2. make a new item with the user input
  const item = createItem(text);

  // 3. add a new item to the items
  items.appendChild(item);

  // 4. scroll to the new added item
  item.scrollIntoView({ block: 'center' });

  // 5. clear the input value
  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const itemName = document.createElement('span');
  itemName.setAttribute('class', 'item__name');
  itemName.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  item.appendChild(itemName);
  item.appendChild(deleteBtn);
  return itemRow;
}

addBtn.addEventListener('click', () => {
  console.log('add button clicked');
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});
