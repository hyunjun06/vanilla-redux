const form = document.getElementById('todo-form');
const list = document.getElementById('todo-list');

const addTodo = (todo) => {
    const li = document.createElement('li');
    li.innerHTML = todo;
    list.appendChild(li);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = document.getElementById('todo-input').value;
    addTodo(todo);
});