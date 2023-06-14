import { DOM } from "./dom";

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

const addTodo = (e, project) => {
  project = "default";
  e.preventDefault();
	let title = todoInput.value;
	let priority = todoPriority.value;
	projects[project].push({title, priority})
	console.log(projects);
	DOM.displayTodo();
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

DOM.displayTodo();
DOM.displayProjects();
todoForm.addEventListener('submit', addTodo);
projectsForm.addEventListener("submit", addProject);

console.log("THIS IS LOADING")

export { projects };
