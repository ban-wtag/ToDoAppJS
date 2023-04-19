import { EDIT, COMPLETE, DELETE_TODO } from "/js/constants.js";
import handleSaveButtonClick from "/js/utility/SaveBtnAction.js";
import handleDeleteButtonClick from "/js/utility/DltBtnAction.js";
import handleCheckButtonClick from "/js/utility/ChkBtnAction.js";

export default function editTask(todoItemElement, taskList, elementId) {
  todoItemElement.querySelector(`[data-job="${DELETE_TODO}"]`).style.display =
    "none";
  todoItemElement.querySelector(`[data-job="${EDIT}"]`).style.display = "none";
  todoItemElement.querySelector(`[data-job="${COMPLETE}"]`).style.display =
    "none";
  const textElement = todoItemElement.querySelector(".text");
  textElement.contentEditable = true;
  textElement.focus();

  const saveBtn = document.createElement("button");
  saveBtn.innerText = "Save";
  saveBtn.classList.add("saveBtn");
  todoItemElement.appendChild(saveBtn);

  const checkBtn = document.createElement("img");
  checkBtn.setAttribute("src", "icons/done.svg");
  checkBtn.setAttribute("data-job", "editCheck");
  checkBtn.setAttribute("id", `${elementId}`);
  todoItemElement.appendChild(checkBtn);

  const deleteBtn = document.createElement("img");
  deleteBtn.setAttribute("src", "icons/delete.svg");
  deleteBtn.setAttribute("data-job", "editDelete");
  deleteBtn.setAttribute("id", `${elementId}`);
  todoItemElement.appendChild(deleteBtn);

  handleSaveButtonClick(todoItemElement, saveBtn, deleteBtn, checkBtn);

  handleCheckButtonClick(
    todoItemElement,
    taskList,
    elementId,
    saveBtn,
    deleteBtn,
    checkBtn
  );
  handleDeleteButtonClick(todoItemElement, saveBtn, deleteBtn, checkBtn);
}
