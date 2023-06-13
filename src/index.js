import "dracula-ui/styles/dracula-ui.css";
import "./styles/style.scss";
import { DOM } from "./js/dom";

// const todoSubmitButton = document.querySelector("#todo-submit");
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
	// if (todoInput.value === "") return;
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


export { projects };
