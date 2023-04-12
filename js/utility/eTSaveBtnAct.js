import { CLICK_EVENT, EDIT, COMPLETE, DELETE_TODO } from "/js/constants.js";

export default function saveButtonActionTodo(
  element,
  saveBtn,
  deleteBtn,
  checkBtn
) {
  let removeListener = false;

  function saveButtonAction(event) {
    event.stopPropagation();
    event.preventDefault();
    element.querySelector(".text").contentEditable = false;
    deleteBtn.style.display = "none";
    element.querySelector(".saveBtn").style.display = "none";
    element.querySelector(`[data-job="${DELETE_TODO}"]`).style.display =
      "inline-block";
    element.querySelector(`[data-job="${COMPLETE}"]`).style.display =
      "inline-block";
    element.querySelector(`[data-job="${EDIT}"]`).style.display =
      "inline-block";
    saveBtn.style.display = "none";
    checkBtn.style.display = "none";
    removeListener = true;
  }
  saveBtn.addEventListener(CLICK_EVENT, saveButtonAction);
  if (removeListener) {
    saveBtn.removeEventListener(CLICK_EVENT, saveButtonAction);
  }
}
