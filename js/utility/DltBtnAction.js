import { CLICK_EVENT, EDIT, COMPLETE, DELETE_TODO } from "/js/constants.js";

export default function deleteButtonActionTodo(
  element,
  saveBtn,
  deleteBtn,
  checkBtn
) {
  let removeListener = false;
  const previousContent = element.querySelector(".text").innerText;

  function deleteButtonAction(event) {
    event.stopPropagation();
    event.preventDefault();
    element.querySelector(".text").contentEditable = false;
    element.querySelector(".text").innerText = previousContent;
    element.querySelector(`[data-job="${EDIT}"]`).style.display =
      "inline-block";
    element.querySelector(`[data-job="${DELETE_TODO}"]`).style.display =
      "inline-block";
    element.querySelector(`[data-job="${COMPLETE}"]`).style.display =
      "inline-block";
    saveBtn.style.display = "none";
    checkBtn.style.display = "none";
    deleteBtn.style.display = "none";
    removeListener = true;
  }

  deleteBtn.addEventListener(CLICK_EVENT, deleteButtonAction);
  if (removeListener) {
    deleteBtn.removeEventListener(CLICK_EVENT, deleteButtonAction);
  }
}
