import { EDIT, COMPLETE, DELETE_TODO } from "/js/constants.js";
import handleSaveButtonClick from "/js/utility/SaveBtnAction.js";
import handleDeleteButtonClick from "/js/utility/DltBtnAction.js";
import handleCheckButtonClick from "/js/utility/ChkBtnAction.js";

export default function editTask(element, taskList, id) {
  element.querySelector(`[data-job="${DELETE_TODO}"]`).style.display = "none";
  element.querySelector(`[data-job="${EDIT}"]`).style.display = "none";
  element.querySelector(`[data-job="${COMPLETE}"]`).style.display = "none";
  const textElement = element.querySelector(".text");
  textElement.contentEditable = true;
  textElement.focus();

  const saveBtn = document.createElement("button");
  saveBtn.innerText = "Save";
  saveBtn.classList.add("saveBtn");
  element.appendChild(saveBtn);

  const checkBtn = document.createElement("img");
  checkBtn.setAttribute("src", "icons/done.svg");
  checkBtn.setAttribute("data-job", "editCheck");
  checkBtn.setAttribute("id", `${id}`);
  element.appendChild(checkBtn);

  const deleteBtn = document.createElement("img");
  deleteBtn.setAttribute("src", "icons/delete.svg");
  deleteBtn.setAttribute("data-job", "editDelete");
  deleteBtn.setAttribute("id", `${id}`);
  element.appendChild(deleteBtn);

  handleSaveButtonClick(element, saveBtn, deleteBtn, checkBtn);

  handleCheckButtonClick(element, taskList, id, saveBtn, deleteBtn, checkBtn);

  handleDeleteButtonClick(element, saveBtn, deleteBtn, checkBtn);
}
