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

    const attr = "data-job";
    displayButtonByAttributes(
      todoItemElement,
      `[${attr}="${EDIT}"]`,
      `[${attr}="${DELETE_TODO}"]`,
      `[${attr}="${COMPLETE}"]`
    );

    hideButtonByAttributes(
      todoItemElement,
      `[${attr}="${EDIT_SAVE}"]`,
      `[${attr}="${EDIT_CHECK}"]`,
      `[${attr}="${EDIT_DELETE}"]`
    );

    todoItemElement.removeChild(saveButtonElement);
    todoItemElement.removeChild(completeButtonElement);
    todoItemElement.removeChild(deleteButtonElement);

    deleteButtonElement.removeEventListener(CLICK_EVENT, handleDeleteButton);
  }
  deleteButtonElement.addEventListener(CLICK_EVENT, handleDeleteButton);
}
