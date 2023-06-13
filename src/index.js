import "dracula-ui/styles/dracula-ui.css";
import "./styles/style.scss";
import { DOM } from "./js/dom";

// const todoSubmitButton = document.querySelector("#todo-submit");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoPriority = document.querySelector("#todo-priority");

let projects = {
	default: [
    {title: "Welcome", priority: 2}
  ]
}

const addTodo = (e) => {
  e.preventDefault();
	// if (todoInput.value === "") return;
	let title = todoInput.value;
	let priority = todoPriority.value;
	projects.default.push({title, priority})
	console.log(projects);
	DOM.displayTodo();
}

DOM.displayTodo();
todoForm.addEventListener('submit', addTodo);

export { projects };
