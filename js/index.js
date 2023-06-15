import { DOM, currentProject } from "./dom";

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoPriority = document.querySelector("#todo-priority");

const projectsForm = document.querySelector("#projects-form");
const projectsInput = document.querySelector("#projects-input");

let projects = {
	default: [
    {title: "Welcome", priority: 2}
  ]
}

const addTodo = (e) => {
  e.preventDefault();
	let title = todoInput.value;
	let priority = todoPriority.value;
	projects[currentProject].push({title, priority})
	console.log(projects);
	DOM.displayTodo(currentProject);
}

const addProject = (e) => {
  e.preventDefault();

  let title = projectsInput.value;

  for (let item in projects){
    if (title === item) return;
  }
  
  projects[title] = [];
  DOM.displayProjects();
}

DOM.displayTodo(currentProject);
DOM.displayProjects();
todoForm.addEventListener('submit', addTodo);
projectsForm.addEventListener("submit", addProject);


export { projects };
