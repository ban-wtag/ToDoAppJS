import {
  CREATE_TASK_BUTTON,
  CONTENT,
  UL_LIST,
  INPUT_TASK,
  INPUT,
  ADD_TASK,
  TRASH_INPUT,
  TODAY,
  COMPLETE,
  EDIT,
  DELETE_TODO,
  CLICK_EVENT,
  HIDE,
  AFTER_BEGIN,
} from "/js/constants.js"; //named import
import createErrorMessageElement from "/js/utility/errorMessage.js";

const taskList = [];
let id = 0;
let dateString;
function addToDo(taskName, id) {
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  dateString = TODAY.toLocaleDateString("en-us", options);
  const item = `<li class="item">                  
                  <p class="text">${taskName}</p>
                  <div class = "date" id = "${id}"> Created At:  ${dateString} </div>
                  <img src= "icons/done.svg" data-job = "${COMPLETE}" id ="${id}"/>
                  <img src = "icons/edit.svg" data-job = "${EDIT}" id = "${id}"/>
                  <img src = "icons/delete.svg" data-job="${DELETE_TODO}" id="${id}"/>
                  </li> `;

  const position = AFTER_BEGIN;
  UL_LIST.insertAdjacentHTML(position, item);
}

CREATE_TASK_BUTTON.addEventListener(CLICK_EVENT, function (event) {
  if (INPUT_TASK.classList.contains(HIDE)) {
    INPUT_TASK.classList.remove(HIDE);
  }
  INPUT.focus();
});

ADD_TASK.addEventListener(CLICK_EVENT, function (event) {
  const todoItemElement = document.getElementById("inputTask");
  const errorMessage = todoItemElement.querySelector("#error-message");
  let taskName = INPUT.value.trim();
  INPUT.value = taskName;
  if (taskName) {
    if (errorMessage) {
      todoItemElement.removeChild(errorMessage);
    }
    addToDo(taskName, id);

    taskList.push({
      name: taskName,
      id: id,
      done: false,
      edit: false,
      trash: false,
    });
    id += 1;
  }
  else {
    if (!errorMessage) {
      const errorMessageCreated = createErrorMessageElement();
      todoItemElement.appendChild(errorMessageCreated);
    }
    INPUT.focus();
    return;
  }
  INPUT_TASK.classList.add(HIDE);
  INPUT.value = null;
});

TRASH_INPUT.addEventListener(CLICK_EVENT, function (event) {
  INPUT_TASK.classList.add(HIDE);
  INPUT.value = null;
});
