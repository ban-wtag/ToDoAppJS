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
import removeTodo from "/js/deleteTask.js";
import markTodoAsCompleted from "/js/markDone.js";
import editTask from "/js/editTask.js";
import updateVisibleItems from "/js/addPagination.js";

const taskList = [];
let id = 0;

function addToDo(taskName, id) {
  const options = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  };

  const dateString = TODAY.toLocaleDateString("en-GB", options).replace(
    /\//g,
    "."
  );
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
  if (INPUT_TASK.className === HIDE) {
    INPUT_TASK.classList.remove(HIDE);
  }

  INPUT.focus();
});

ADD_TASK.addEventListener(CLICK_EVENT, function (event) {
  const taskName = INPUT.value;
  if (taskName) {
    const taskStartDate = TODAY.toISOString().slice(0, 10);

    addToDo(taskName, id);

    taskList.push({
      name: taskName,
      id: id,
      done: false,
      edit: false,
      trash: false,
      startDate: taskStartDate,
    });

    id += 1;
  } else {
    INPUT.focus();
    return;
  }
  INPUT_TASK.classList.add(HIDE);
  INPUT.value = null;

  updateVisibleItems();
});

TRASH_INPUT.addEventListener(CLICK_EVENT, function (event) {
  INPUT_TASK.classList.add(HIDE);
  INPUT.value = null;
});

function onActionTodo(event) {
  const element = event.target;
  const elementJob = element.getAttribute("data-job");
  if (elementJob === DELETE_TODO) {
    removeTodo(element.parentNode, taskList, Number(element.id));
  } else if (elementJob === COMPLETE) {
    markTodoAsCompleted(element.parentNode, taskList, Number(element.id));
  } else if (elementJob === EDIT) {
    editTask(element.parentNode, taskList, Number(element.id));
  }

  UL_LIST.removeEventListener(CLICK_EVENT, onActionTodo);
  addTodoClickListener();
}

function addTodoClickListener() {
  UL_LIST.addEventListener(CLICK_EVENT, onActionTodo);
}

addTodoClickListener();
