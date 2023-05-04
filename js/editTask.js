import {
  EDIT,
  COMPLETE,
  DELETE_TODO,
  EDIT_SAVE,
  EDIT_CHECK,
  EDIT_DELETE,
  DONE_ICON,
  DELETE_ICON,
} from "/js/constants.js";
import handleSaveButtonClick from "/js/utility/SaveButtonAction.js";
import handleDeleteButtonClick from "/js/utility/DeleteButtonAction.js";
import handleCheckButtonClick from "/js/utility/CheckButtonAction.js";
import createButton from "/js/utility/createButton.js";
import hideButtonByAttributes from "/js/utility/hideButtonByAttributes.js";

export default function editTask(todoItemElement, taskList, elementId) {
  const attr = "data-job";

  hideButtonByAttributes(
    todoItemElement,
    `[${attr}="${DELETE_TODO}"]`,
    `[${attr}="${EDIT}"]`,
    `[${attr}="${COMPLETE}"]`
  );

  const textElement = todoItemElement.querySelector(".text");
  textElement.contentEditable = true;
  textElement.focus();

  const saveButton = document.createElement("button");
  saveButton.innerText = "Save";
  saveButton.classList.add("saveButton");
  saveButton.setAttribute("data-job", `${EDIT_SAVE}`);
  todoItemElement.appendChild(saveButton);

  const checkButton = createButton("img", DONE_ICON, EDIT_CHECK, elementId);
  todoItemElement.appendChild(checkButton);

  const deleteButton = createButton("img", DELETE_ICON, EDIT_DELETE, elementId);
  todoItemElement.appendChild(deleteButton);

  handleSaveButtonClick(todoItemElement, saveButton, deleteButton, checkButton);

  handleCheckButtonClick(todoItemElement, taskList, elementId, checkButton);
  handleDeleteButtonClick(
    todoItemElement,
    saveButton,
    deleteButton,
    checkButton
  );
}
