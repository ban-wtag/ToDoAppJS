import {
  CLICK_EVENT,
  EDIT,
  COMPLETE,
  DELETE_TODO,
  EDIT_SAVE,
  EDIT_CHECK,
  EDIT_DELETE,
  INPUT,
} from "/js/constants.js";
import markTodoAsCompleted from "/js/markDone.js";
import createErrorMessageElement from "/js/utility/errorMessage.js";
import toggleButtonDisplayByAttributes from "/js/utility/toggleButtonDisplayByAttributes.js";

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
      const newTextElement = todoItemElement.querySelector(".text");
      const newInputValue = newTextElement.innerText.trim();
      newTextElement.innerText = newInputValue;
      markTodoAsCompleted(todoItemElement, taskList, id);

      const attr = "data-job";

      toggleButtonDisplayByAttributes(
        todoItemElement,
        `[${attr}="${DELETE_TODO}"]`,
        `[${attr}="${EDIT_SAVE}"]`,
        `[${attr}="${EDIT_CHECK}"]`,
        `[${attr}="${EDIT_DELETE}"]`,
        `[${attr}="${EDIT}"]`,
        `[${attr}="${COMPLETE}"]`
      );

      completeButtonElement.removeEventListener(CLICK_EVENT, handleCheckButton);
    }
  }

  completeButtonElement.addEventListener(CLICK_EVENT, handleCheckButton);
}
