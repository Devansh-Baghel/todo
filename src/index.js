import "dracula-ui/styles/dracula-ui.css";
import "./styles/style.css";

const arrayOfTodo = [];

const todoFactory = (title, desc, dueDate, priority) =>{
  return { title, desc, dueDate, priority};
}

const newTodo = todoFactory("do this", "now", "tomorow", 1);
