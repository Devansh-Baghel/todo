import { DOM, currentProject } from "./dom";

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoPriority = document.querySelector("#todo-priority");

const projectsForm = document.querySelector("#projects-form");
const projectsInput = document.querySelector("#projects-input");
const inbox = document.querySelector("#inbox");

let projects = {
  "Welcome!": [{ title: "Welcome", priority: "default" }],
};


const addTodo = (e) => {
  e.preventDefault();
  let title = todoInput.value;
  let priority = todoPriority.value;
  projects[currentProject].push({ title, priority });
  DOM.displayTodo(currentProject);
  todoInput.value = "";
};

const addProject = (e) => {
  e.preventDefault();

  let title = projectsInput.value;

  for (let item in projects) {
    if (title === item) return;
  }

  projects[title] = [];
  DOM.displayProjects();
  projectsInput.value = "";
};

DOM.displayTodo(currentProject);
DOM.displayProjects();
todoForm.addEventListener("submit", addTodo);
projectsForm.addEventListener("submit", addProject);
inbox.addEventListener("click", DOM.displayAllTodo);

export { projects };
