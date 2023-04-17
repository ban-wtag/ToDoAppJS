import { CLICK_EVENT, EDIT, COMPLETE, DELETE_TODO } from "/js/constants.js";
import markTodoAsCompleted from "/js/markDone.js";

export default function checkButtonActionTodo(element, taskList, id, saveBtn, deleteBtn, checkBtn) {
  let removeListener = false;

  function checkButtonAction(event) {
    event.stopPropagation();
    event.preventDefault();
    element.querySelector(".text").contentEditable = false;
    markTodoAsCompleted(element, taskList, id);
    element.querySelector(`[data-job="${DELETE_TODO}"]`).style.display =
      "inline-block";
    element.querySelector(`[data-job="${EDIT}"]`).style.display = "none";
    saveBtn.style.display = "none";
    checkBtn.style.display = "none";
    deleteBtn.style.display = "none";
    removeListener = true;
  }

  checkBtn.addEventListener(CLICK_EVENT, checkButtonAction);
  if (removeListener) {
    checkBtn.removeEventListener(CLICK_EVENT, checkButtonAction);
  }
}
