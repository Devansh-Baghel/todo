import { projects } from "./index";
import deleteImg from "../images/delete_FILL0_wght400_GRAD0_opsz40.svg";

const todoContainer = document.querySelector("#todo-container");
const projectsList = document.querySelector("#projects-list");
const heading = document.querySelector("#heading");

// Sets the current project to be the default project which is "Welcome!"
let currentProject = "Welcome!";

const DOM = {
  displayTodo: (project) => {
    todoContainer.innerText = "";

    for (let item of projects[project]) {
      const newDiv = document.createElement("div");
      const newInput = document.createElement("input");
      const newLabel = document.createElement("label");

      todoContainer.appendChild(newDiv);
      newDiv.classList.add(
        "drac-box",
        "drac-card",
        "drac-bg-purple",
        "drac-p-sm",
        "drac-my-sm"
      );
      newDiv.appendChild(newInput);
      newDiv.appendChild(newLabel);

      newInput.type = "checkbox";
      newInput.classList.add("drac-checkbox", "drac-checkbox-green");
      newLabel.classList.add("drac-text", "drac-text-white", "drac-pl-sm");
      newInput.id = item.title;
      newLabel.for = item.title;
      newLabel.innerText = item.title;

      const id = projects[currentProject].indexOf(item);

      DOM.addPriority(item.priority, newDiv);
      DOM.addDeleteButton(newDiv, id);
    }
  },
  displayProjects: () => {
    projectsList.innerText = "";
    for (let item in projects) {
      const newProject = document.createElement("p");
      newProject.classList.add(
        "drac-box",
        "drac-card",
        "drac-bg-purple",
        "drac-my-sm",
        "drac-p-sm"
      );
      projectsList.appendChild(newProject);

      newProject.innerText = item;
      newProject.id = "project-item";

      newProject.addEventListener("click", () => {
        currentProject = item;
        heading.innerText = item;
        DOM.displayTodo(currentProject);

        document.querySelectorAll("#project-item").forEach((project) => {
          if (project.innerText === item) {
            project.classList.remove("drac-bg-purple");
            project.classList.add("drac-bg-cyan-green");
          } else {
            project.classList.remove("drac-bg-cyan-green");
            project.classList.add("drac-bg-purple");
          }
        });
      });
    }
  },

  addPriority(priorityNumber, container) {
    const outerSpan = document.createElement("span");
    const innerSpan = document.createElement("span");
    outerSpan.classList.add("drac-badge");

    if (priorityNumber === "1") {
      outerSpan.classList.add("drac-bg-red");
      innerSpan.classList.add("drac-text-white");
    } else if (priorityNumber === "2") {
      outerSpan.classList.add("drac-bg-orange");
      innerSpan.classList.add("drac-text-white");
    } else if (priorityNumber === "3") {
      outerSpan.classList.add("drac-bg-yellow");
      innerSpan.classList.add("drac-text-purple");
    } else if (priorityNumber == "default") {
      outerSpan.classList.add("drac-bg-purple");
      innerSpan.classList.add("drac-text-purple");
    } else {
      outerSpan.classList.add("drac-bg-cyan");
      innerSpan.classList.add("drac-text-purple");
    }

    container.appendChild(outerSpan);
    outerSpan.appendChild(innerSpan);
    innerSpan.innerText = `P ${priorityNumber}`;
  },

  addDeleteButton(container, id) {
    const deleteImage = document.createElement("img");
    deleteImage.src = deleteImg;
    container.appendChild(deleteImage);

    deleteImage.addEventListener("click", () => {
      todoContainer.removeChild(container);

      for (let i in projects[currentProject]) {
        let lastElement = projects[currentProject].length - 1;
        if (i == lastElement) {
          projects[currentProject].pop();
        } else if (i == id) {
          projects[currentProject].splice(i, 1);
        }
      }
    });
  },

  displayAllTodo(){
    todoContainer.innerText = "";
    heading.innerText = "All Projects"
    Object.values(projects).forEach(item => {
      for (let i in item){
        let title = item[i].title;

        const newDiv = document.createElement("div");
        const newInput = document.createElement("input");
        const newLabel = document.createElement("label");

        todoContainer.appendChild(newDiv);
        newDiv.classList.add(
          "drac-box",
          "drac-card",
          "drac-bg-purple",
          "drac-p-sm",
          "drac-my-sm"
        );
        newDiv.appendChild(newInput);
        newDiv.appendChild(newLabel);

        newInput.type = "checkbox";
        newInput.classList.add("drac-checkbox", "drac-checkbox-green");
        newLabel.classList.add("drac-text", "drac-text-white", "drac-pl-sm");
        newInput.id = title;
        newLabel.for = title;
        newLabel.innerText = title;
      }
    })

  }
};

export { DOM, currentProject };
