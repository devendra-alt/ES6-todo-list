import './style.css';

import { addTask, toDoTasks, RenderToDoList } from './tasks';

window.addEventListener('load', () => {
  if (!toDoTasks) localStorage.setItem('tasks', JSON.stringify([]));
  RenderToDoList();
  addTask();
});
