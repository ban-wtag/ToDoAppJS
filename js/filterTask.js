import { taskLIST } from "/js/addToTask.js";
import {
  CREATE_TASK_BUTTON,
  loadMoreBtn,
  showLessBtn,
  UL_LIST,
  CLICK_EVENT,
  EDIT,
  COMPLETE,
  DELET,
  COMPLETED_TASK,
  INCOMPLETED_TASK,
  FILTER_OPTION,
  ALL_FILTER,
  COMPLETE_FILTER,
  INCOMPLETE_FILTER,
} from "/js/constants.js";
import completeToDo from "/js/markDone.js";
import removeToDos from "/js/deleteTask.js";
import addPagination from "/js/addPagination.js";

//filter all complete incomplete

FILTER_OPTION.addEventListener("click", filterTodo);

function filterTodo(e) {
  let boxes = [...document.querySelectorAll(".container .content .item")];

  // const todos = list.childNodes;
  console.log("boxes", boxes);
  boxes.forEach(function (todo) {
    console.log("todo loop todo elem", todo);
    switch (e.target.value) {
      case ALL_FILTER:
       // addPagination();
        //  todo.style.display = "block";
        break;
      case COMPLETE_FILTER:
        if (todo.classList.contains(COMPLETED_TASK)) {
          todo.style.display = "block";
        } else {
          todo.style.display = "none";
        }
        break;
      case INCOMPLETE_FILTER:
        if (!todo.classList.contains(COMPLETED_TASK)) {
          todo.style.display = "block";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
