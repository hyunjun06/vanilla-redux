import { legacy_createStore as createStore } from 'redux';

const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((_todo, index) => index !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

const addTodo = (todo) => {
  store.dispatch({
    type: ADD_TODO,
    payload: todo,
  });
}

const deleteTodo = (index) => {
  store.dispatch({
    type: DELETE_TODO,
    payload: index,
  });
}

const render = () => {
  const state = store.getState();
  todoList.innerHTML = '';
  state.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = todo;
    li.addEventListener('click', () => deleteTodo(index));
    todoList.appendChild(li);
  });
}

store.subscribe(render);

todoInput.addEventListener('submit', (event) => {
  event.preventDefault();
  const todo = event.target.elements[0].value;
  addTodo(todo);
  event.target.reset();
});