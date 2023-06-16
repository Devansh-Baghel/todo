import { projects } from "./index";

const todoContainer = document.querySelector("#todo-container");
const projectsList = document.querySelector("#projects-list");
const heading = document.querySelector("#heading");

// Sets the current project to be the default project which is "Welcome!"
let currentProject = "Welcome!";

const DOM = {
	displayTodo: (project) => {
    todoContainer.innerText = "";

    for(let item of projects[project]){
      // console.log(item)
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

      DOM.addPriority(item.priority, newDiv);
    }

	},
  displayProjects: () => {
    projectsList.innerText = "";
    for(let item in projects){
      const newProject = document.createElement("p");
      newProject.classList.add("drac-box" ,"drac-card", "drac-bg-purple", "drac-my-sm", "drac-p-sm");
      projectsList.appendChild(newProject);

      newProject.innerText = item;
      newProject.id = "project-item";

      newProject.addEventListener("click", () => {
        currentProject = item;
        heading.innerText = item;
        DOM.displayTodo(currentProject);
        

        document.querySelectorAll("#project-item").forEach(project => {
          if (project.innerText === item){
            project.classList.remove("drac-bg-purple");
            project.classList.add("drac-bg-cyan-green");
          } else {
            project.classList.remove("drac-bg-cyan-green");
            project.classList.add("drac-bg-purple");
          }
        })
        })

    }
  },

  addPriority(priorityNumber, container){
    const outerSpan = document.createElement("span");
    const innerSpan = document.createElement("span");
    outerSpan.classList.add(
      "drac-badge",
      "drac-bg-cyan-transparent",
      "drac-badge-subtle",
      "drac-text-cyan"
    )

    innerSpan.classList.add(
      "drac-text-cyan"
    )
    
    container.appendChild(outerSpan);
    outerSpan.appendChild(innerSpan); 
    innerSpan.innerText = `P ${priorityNumber}`;

  }
  
}

export { DOM , currentProject};
