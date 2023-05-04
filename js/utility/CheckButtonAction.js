import {
  CLICK_EVENT,
  EDIT,
  COMPLETE,
  DELETE_TODO,
  EDIT_SAVE,
  EDIT_CHECK,
  EDIT_DELETE,
} from "/js/constants.js";
import markTodoAsCompleted from "/js/markDone.js";
import createErrorMessageElement from "/js/utility/errorMessage.js";
import hideButtonByAttributes from "/js/utility/hideButtonByAttributes.js";
import displayButtonByAttributes from "/js/utility/displayButtonByAttributes.js";

export default function handleCheckButtonClick(
  todoItemElement,
  taskList,
  id,
  completeButtonElement
) {
  function handleCheckButton(event) {
    event.stopPropagation();
    event.preventDefault();
    const errorMessage = todoItemElement.querySelector("#error-message");
    const textElement = todoItemElement.querySelector(".text");
    const inputValue = textElement.innerText;
    if (!inputValue) {
      if (!errorMessage) {
        const errorMessageCreated = createErrorMessageElement();
        todoItemElement.appendChild(errorMessageCreated);
      }

      todoItemElement.querySelector(".text").focus();
    } else {
      if (errorMessage) {
        todoItemElement.removeChild(errorMessage);
      }

      textElement.contentEditable = false;
      markTodoAsCompleted(todoItemElement, taskList, id);

      const attr = "data-job";
      displayButtonByAttributes(todoItemElement, `[${attr}="${DELETE_TODO}"]`);

      hideButtonByAttributes(
        todoItemElement,
        `[${attr}="${EDIT_SAVE}"]`,
        `[${attr}="${EDIT}"]`,
        `[${attr}="${EDIT_CHECK}"]`,
        `[${attr}="${EDIT_DELETE}"]`
      );

      completeButtonElement.removeEventListener(CLICK_EVENT, handleCheckButton);
    }
  }

  completeButtonElement.addEventListener(CLICK_EVENT, handleCheckButton);
}
