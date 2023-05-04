import createErrorMessageElement from "/js/utility/errorMessage.js";
import {
  CLICK_EVENT,
  EDIT,
  COMPLETE,
  DELETE_TODO,
  EDIT_SAVE,
  EDIT_CHECK,
  EDIT_DELETE,
} from "/js/constants.js";
import hideButtonByAttributes from "/js/utility/hideButtonByAttributes.js";
import displayButtonByAttributes from "/js/utility/displayButtonByAttributes.js";

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
        const errorMessageCreated = createErrorMessageElement();
        todoItemElement.appendChild(errorMessageCreated);
      }

      todoItemElement.querySelector(".text").focus();
    } else {
      if (errorMessage) {
        todoItemElement.removeChild(errorMessage);
      }

      todoItemElement.querySelector(".text").contentEditable = false;

      const attr = "data-job";

      hideButtonByAttributes(
        todoItemElement,
        `[${attr}="${EDIT_DELETE}"]`,
        `[${attr}="${EDIT_SAVE}"]`,
        `[${attr}="${EDIT_CHECK}"]`
      );

      displayButtonByAttributes(
        todoItemElement,
        `[${attr}="${DELETE_TODO}"]`,
        `[${attr}="${COMPLETE}"]`,
        `[${attr}="${EDIT}"]`
      );

      todoItemElement.removeChild(saveButtonElement);
      todoItemElement.removeChild(completeButtonElement);
      todoItemElement.removeChild(deleteButtonElement);

      saveButtonElement.removeEventListener(CLICK_EVENT, handleSaveButton);
    }
  }
  saveButtonElement.addEventListener(CLICK_EVENT, handleSaveButton);
}
