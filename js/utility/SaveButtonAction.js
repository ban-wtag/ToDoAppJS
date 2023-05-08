import createErrorMessageElement from "/js/utility/errorMessage.js";
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
import toggleButtonDisplayByAttributes from "/js/utility/toggleButtonDisplayByAttributes.js";
import removeButton from "/js/utility/removeButton.js";

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
      const newTextElement = todoItemElement.querySelector(".text");
      const newInputValue = newTextElement.innerText.trim();
      newTextElement.innerText = newInputValue;

      const attr = "data-job";

      toggleButtonDisplayByAttributes(
        todoItemElement,
        `[${attr}="${EDIT_DELETE}"]`,
        `[${attr}="${EDIT_SAVE}"]`,
        `[${attr}="${EDIT_CHECK}"]`,
        `[${attr}="${DELETE_TODO}"]`,
        `[${attr}="${COMPLETE}"]`,
        `[${attr}="${EDIT}"]`
      );

      removeButton(
        todoItemElement,
        saveButtonElement,
        completeButtonElement,
        deleteButtonElement
      );

      saveButtonElement.removeEventListener(CLICK_EVENT, handleSaveButton);
    }
  }

  saveButtonElement.addEventListener(CLICK_EVENT, handleSaveButton);
}
