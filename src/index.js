import './style.css';

import toDoTasks from '../assets/todoList.js';

const todoListEl = document.querySelector('#todo-list');

const elementAppender = (parentNode, childNode) => {
  parentNode.appendChild(childNode);
};

const elementCreater = (name_, id) => {
  const element = document.createElement(name_);
  if (id) element.id = id;
  return element;
};

const createListItem = (task) => {
  const listItemEl = elementCreater('li', task.index);
  const checkInputEl = elementCreater('input', null);
  const taskDescription = elementCreater('p', null);
  checkInputEl.type = 'checkbox';
  checkInputEl.checked = task.completed;
  taskDescription.textContent = task.description;
  elementAppender(listItemEl, checkInputEl);
  elementAppender(listItemEl, taskDescription);
  elementAppender(todoListEl, listItemEl);
};

const RenderToDoList = () => {
  toDoTasks.forEach((task) => createListItem(task));
};

RenderToDoList();
