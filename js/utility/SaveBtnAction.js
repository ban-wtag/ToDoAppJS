import createErrorMessage from "/js/utility/errorMessage.js";
import { CLICK_EVENT, EDIT, COMPLETE, DELETE_TODO } from "/js/constants.js";

export default function handleSaveButtonClick(
  todoItemElement,
  saveButtonElement,
  deleteButtonElement,
  completeButtonElement
) {
  function handleSaveButton(event) {
    event.stopPropagation();
    event.preventDefault();
    const errorMessage = todoItemElement.querySelector("#error-message");
    const textElement = todoItemElement.querySelector(".text");
    const inputValue = textElement.innerText;

    if (!inputValue) {
      if (!errorMessage) {
        const errorMessageCreated = createErrorMessage();
        todoItemElement.appendChild(errorMessageCreated);
      }
      todoItemElement.querySelector(".text").focus();
    } else {
      if (errorMessage) {
        todoItemElement.removeChild(errorMessage);
      }
      todoItemElement.querySelector(".text").contentEditable = false;
      deleteButtonElement.style.display = "none";
      saveButtonElement.style.display = "none";
      todoItemElement.querySelector(
        `[data-job="${DELETE_TODO}"]`
      ).style.display = "inline-block";
      todoItemElement.querySelector(`[data-job="${COMPLETE}"]`).style.display =
        "inline-block";
      todoItemElement.querySelector(`[data-job="${EDIT}"]`).style.display =
        "inline-block";
      completeButtonElement.style.display = "none";
      saveButtonElement.removeEventListener(CLICK_EVENT, handleSaveButton);
    }
  }
  saveButtonElement.addEventListener(CLICK_EVENT, handleSaveButton);
}
