import { CLICK_EVENT, EDIT, COMPLETE, DELETE_TODO } from "/js/constants.js";

export default function handleDeleteButtonClick(
  todoItemElement,
  saveButtonElement,
  deleteButtonElement,
  completeButtonElement
) {
  const previousContent = todoItemElement.querySelector(".text").innerText;

  function handleDeleteButton(event) {
    event.stopPropagation();
    event.preventDefault();
    const errorMessage = todoItemElement.querySelector("#error-message");
    if (errorMessage) {
      todoItemElement.removeChild(errorMessage);
    }
    todoItemElement.querySelector(".text").contentEditable = false;
    todoItemElement.querySelector(".text").innerText = previousContent;
    todoItemElement.querySelector(`[data-job="${EDIT}"]`).style.display =
      "inline-block";
    todoItemElement.querySelector(`[data-job="${DELETE_TODO}"]`).style.display =
      "inline-block";
    todoItemElement.querySelector(`[data-job="${COMPLETE}"]`).style.display =
      "inline-block";
    saveButtonElement.style.display = "none";
    completeButtonElement.style.display = "none";
    deleteButtonElement.style.display = "none";
    deleteButtonElement.removeEventListener(CLICK_EVENT, handleDeleteButton);
  }
  deleteButtonElement.addEventListener(CLICK_EVENT, handleDeleteButton);
}
