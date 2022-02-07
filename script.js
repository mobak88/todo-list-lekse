const userInput = document.getElementById('user-todo-input');
const addBtn = document.getElementsByClassName('add-todo');
const todoList = document.getElementById('todo-list');

const todos = [];

function addTodoToArr() {
    todos.push({ todo: userInput.value });
    addDisplayTodo();
}

function clearTodoList() {
    todoList.innerHTML = '';
}

function addDisplayTodo() {
    clearTodoList();
    for (let i = 0; i < todos.length; i++) {
        todoList.innerHTML += `
        <li>${todos[i].todo}</li>
        <button onclick='deleteTodos(${i})'>Slett</button>
        `;
    }
}

function deleteTodos(i) {
    todos.splice(i, 1);
    addDisplayTodo();
}