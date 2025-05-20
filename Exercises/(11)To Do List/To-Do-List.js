// To do list array
const toDoList = [];

function renderToDoList(){

  let toDoListHTML = '';

  for (let i = 0; i < toDoList.length; i++ ){
    const toDo = toDoList[i];

    // Creates HTML code 
    const html = `<p>${toDo}</p>`;
    toDoListHTML += html;
  }
  console.log(toDoListHTML);

  document.querySelector('.toDoList').innerHTML = toDoListHTML;
}

function addToDo(){
  const inputElement = document.querySelector('.nameInput');
  const name = inputElement.value;

  // Pushes the value into the array
  toDoList.push(name);
  console.log(toDoList);

  inputElement.value = '';

  renderToDoList();
}