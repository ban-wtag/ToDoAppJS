import { CLICK_EVENT, EDIT, COMPLETE, DELETE_TODO } from "/js/constants.js";
import markTodoAsCompleted from "/js/markDone.js";
import createErrorMessage from "/js/utility/errorMessage.js";

export default function handleCheckButtonClick(
  todoItemElement,
  taskList,
  id,
  saveButtonElement,
  deleteButtonElement,
  completeButtonElement
) {
  let removeListener = false;

  function handleCheckButton(event) {
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
      markTodoAsCompleted(todoItemElement, taskList, id);
      todoItemElement.querySelector(
        `[data-job="${DELETE_TODO}"]`
      ).style.display = "inline-block";
      todoItemElement.querySelector(`[data-job="${EDIT}"]`).style.display =
        "none";
      saveButtonElement.style.display = "none";
      completeButtonElement.style.display = "none";
      deleteButtonElement.style.display = "none";
      removeListener = true;
    }
  }
  completeButtonElement.addEventListener(CLICK_EVENT, handleCheckButton);
  if (removeListener) {
    completeButtonElement.removeEventListener(CLICK_EVENT, handleCheckButton);
  }
}
