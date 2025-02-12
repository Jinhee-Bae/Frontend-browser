document.addEventListener('DOMContentLoaded', () => {
  const product = document.querySelector('#itemInput'); // input field
  const add = document.querySelector('#addItemButton');
  const itemList = document.querySelector('.items'); // item of shopping list
  const ul = document.querySelector('.items');

  const addItem = () => {
    const newItemText = product.value; // get input value
    console.log(`Input value: ${newItemText}`);

    if (newItemText) {
      // create new item
      const newItem = document.createElement('li');
      newItem.classList.add('item');
      newItem.innerHTML = `
      <p>${newItemText}</p>
      <p class="trash" style="cursor: pointer;">🗑️</p>
    `;

      // delete Item
      newItem.querySelector('.trash').addEventListener('click', () => {
        console.log('Trash clicked');
        newItem.remove();
      });

      // add item on list
      itemList.appendChild(newItem);
      console.log('New item added to list');
      product.value = ''; // clear input field
    }
  };

  product.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addItem();
    }
  });

  add.addEventListener('click', addItem);

  const ulHeight = ul.clientHeight;
  console.log('ulHeight > 500');
  if (ulHeight > 500) {
    console.log('ulHeight > 500');
    items.style.maxHeight = '500px';
    items.style.overflowY = 'scroll';
  }
});
