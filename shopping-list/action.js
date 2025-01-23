document.addEventListener('DOMContentLoaded', () => {
  const product = document.querySelector('#itemInput'); // input field
  const add = document.querySelector('#addItemButton');
  const itemList = document.querySelector('.items'); // item of shopping list

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

  product.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  });

  add.addEventListener('click', addItem);
});

// product.addEventListener("enter", updateValue);
// function updateValue(e) {
//   if(item && product)
//   item.innerHTML = product.value;
//   item.style.display = 'flex';
// }
