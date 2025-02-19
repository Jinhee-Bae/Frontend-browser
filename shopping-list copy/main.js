const addBtn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');
const form = document.querySelector('.new-form');
const items = document.querySelector('.items');

/* consider the following:
as a object orient Programming language, make a good use of nasting. put createItem function inside of onAdd() function. therefore createItem() function can only used through onAdd() funtion. */

form.addEventListener('submit', (event) => {
  event.preventDefault();
  onAdd();
});

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

let id = 0; //UUID
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
    <div class="item">
      <span class="item__name">${text}</span>
      <button class="item__delete">
        <i class="fas fa-trash-alt" data-id=${id}></i>
      </button>
    </div>
    <div class="item__divider"></div>
`;
  id++;
  return itemRow;
}

items.addEventListener('click', (event) => {
  event.preventDefault();
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
