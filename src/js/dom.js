import { projects } from "../index";

const todoContainer = document.querySelector("#todo-container");


const DOM = {
	displayTodo: () => {
    todoContainer.innerText = "";

    for(let item of projects.default){
      const newDiv = document.createElement("div");
      const newInput = document.createElement("input");
      const newLabel = document.createElement("label");

      todoContainer.appendChild(newDiv);
      newDiv.classList.add("drac-box", "drac-card", "drac-bg-purple", "drac-p-sm", "drac-my-sm");
      newDiv.appendChild(newInput);
      newDiv.appendChild(newLabel);

      newInput.type = "checkbox";
      newInput.classList.add("drac-checkbox", "drac-checkbox-green");
      newLabel.classList.add("drac-text", "drac-text-white", "drac-pl-sm");
      newInput.id = item.title;
      newLabel.for = item.title;
      newLabel.innerText = item.title;
    }

	}
}

export { DOM };
