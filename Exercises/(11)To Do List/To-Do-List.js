// To do list array
const toDoList = [];

function renderToDoList(){

  let toDoListHTML = '';

  for (let i = 0; i < toDoList.length; i++ ){
    const toDoObject = toDoList[i];

    // Shortcut for putting objects
    const { name, dueDate } = toDoObject;

    // Creates HTML code 
    const html = 
    `<p>
      ${name} ${dueDate} 
      <button 
        onclick=
          "toDoList.splice(${i}, 1);
          renderToDoList(); ">Delete
      </button>
    </p>`;

    toDoListHTML += html;
  }

  document.querySelector('.toDoList').innerHTML = toDoListHTML;
}

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
}