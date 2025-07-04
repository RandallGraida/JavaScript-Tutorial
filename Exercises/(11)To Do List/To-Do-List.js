// To do list array
const toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];

renderToDoList();

function renderToDoList(){
  let toDoListHTML = '';

  toDoList.forEach((toDoObject, index) => {
    // Shortcut for putting objects
    const { name, dueDate } = toDoObject;

    // Creates HTML code 
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button 
        class=
          "deleteToDoButton deleteToDoButtonHtml">Delete
      </button>
    `;
    toDoListHTML += html;
  });
  document.querySelector('.toDoList').innerHTML = toDoListHTML;
 
  // document.querySelectorAll - gives us all the elements with the matching class
  document.querySelectorAll('.deleteToDoButtonHtml')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        toDoList.splice(index, 1);
        renderToDoList();
        saveToStorage();
      });
    }) 
}

document.querySelector('.addToDoButtonHtml')
  .addEventListener('click', () => {
    addToDo();
  });

function addToDo(){
  const inputElement = document.querySelector('.nameInput');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.dueDateInput');
  const dueDate = dateInputElement.value;

  // Pushes the value into the array
  // Destructuring - shortcut for putting objects
  toDoList.push({
    name,
    dueDate
  });

  inputElement.value = '';

  renderToDoList();

  saveToStorage();
}

// Save previous to do when you refresh page
function saveToStorage(){
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
}