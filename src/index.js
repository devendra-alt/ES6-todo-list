import './style.css';

import { addTask, RenderToDoList } from './tasks.js';

window.addEventListener('load', () => {
  RenderToDoList();
  addTask();
});
