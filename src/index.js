import './style.css';

import toDoTasks from '../assets/todoList.js';

const todoListEl = document.querySelector('#todo-list');

const RenderToDoList = () => {
  toDoTasks.forEach((task) => {
    const listItemEl = document.createElement('li');
    listItemEl.id = task.index;
    listItemEl.classList.add('list-item', 'padding');
    const dataWrapperEl = document.createElement('div');
    const completedString = task.completed ? 'checked' : '';
    const checkboxEl = `
      <input type="checkbox" ${completedString} >
    `;
    const dataEntryEl = `
      <input type="text" value="${task.description}" class="description-field">
    `;
    dataWrapperEl.innerHTML += checkboxEl;
    dataWrapperEl.innerHTML += dataEntryEl;

    listItemEl.appendChild(dataWrapperEl);

    const menuIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" id="loader">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
    </svg>
    `;

    listItemEl.innerHTML += menuIcon;

    todoListEl.appendChild(listItemEl);
  });
};

RenderToDoList();
