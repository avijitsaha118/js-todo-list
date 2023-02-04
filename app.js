// const form = document.querySelector('#to-do-form');
// const input = document.querySelector('#to-do-input');
// const list = document.querySelector('#to-do-list');

// let toDoItems = [];

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   const value = input.value;
//   toDoItems.push(value);
//   input.value = '';
//   renderToDoItems();
// });

// function renderToDoItems() {
//   list.innerHTML = '';
//   toDoItems.forEach(function(item, index) {
//     const li = document.createElement('li');
//     const text = document.createElement('span');
//     text.innerHTML = item;
//     li.appendChild(text);

//     const deleteButton = document.createElement('button');
//     deleteButton.innerHTML = 'Delete';
//     deleteButton.addEventListener('click', function() {
//       toDoItems.splice(index, 1);
//       renderToDoItems();
//     });
//     li.appendChild(deleteButton);

//     const editButton = document.createElement('button');
//     editButton.innerHTML = 'Edit';
//     editButton.addEventListener('click', function() {
//       input.value = item;
//       toDoItems.splice(index, 1);
//       renderToDoItems();
//     });
//     li.appendChild(editButton);

//     list.appendChild(li);
//   });
// }


// const form = document.querySelector('#to-do-form');
// const input = document.querySelector('#to-do-input');
// const list = document.querySelector('#to-do-list');

// let toDoItems = [];

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   const value = input.value;
//   toDoItems.push(value);
//   input.value = '';
//   renderToDoItems();
// });

// function renderToDoItems() {
//   list.innerHTML = '';
//   toDoItems.forEach(function(item, index) {
//     const li = document.createElement('li');
//     const text = document.createElement('span');
//     text.innerHTML = item;
//     li.appendChild(text);

//     const deleteButton = document.createElement('button');
//     deleteButton.innerHTML = 'Delete';
//     deleteButton.addEventListener('click', function() {
//       toDoItems.splice(index, 1);
//       renderToDoItems();
//     });
//     li.appendChild(deleteButton);

//     const editButton = document.createElement('button');
//     editButton.innerHTML = 'Edit';
//     editButton.addEventListener('click', function() {
//       input.value = item;
//       toDoItems.splice(index, 1);
//     });
//     li.appendChild(editButton);

//     list.appendChild(li);
//   });
// }




const form = document.querySelector('#to-do-form');
const input = document.querySelector('#to-do-input');
const list = document.querySelector('#to-do-list');

let toDoItems = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (!input.value) {
    alert('Please write something in the input field');
    return;
  }
  const value = input.value;
  toDoItems.push(value);
  input.value = '';
  renderToDoItems();
});

function renderToDoItems() {
  list.innerHTML = '';
  toDoItems.forEach(function(item, index) {
    const li = document.createElement('li');
    const text = document.createElement('span');
    text.innerHTML = item;
    li.appendChild(text);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', function() {
      toDoItems.splice(index, 1);
      renderToDoItems();
    });
    li.appendChild(deleteButton);

    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.addEventListener('click', function() {
      input.value = item;
      toDoItems.splice(index, 1);
    });
    li.appendChild(editButton);

    list.appendChild(li);
  });
}

