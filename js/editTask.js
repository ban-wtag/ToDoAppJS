import { CLICK_EVENT, EDIT, COMPLETE, DELETE_TODO } from "/js/constants.js";
import saveButtonActionTodo from "/js/utility/eTSaveBtnAct.js";
import deleteButtonActionTodo from "/js/utility/eTDelBtnAct.js";
import checkButtonActionTodo from "/js/utility/eTChkBtnAct.js";

export default function editTask(element, taskList, id) {
  element.querySelector(`[data-job="${DELETE_TODO}"]`).style.display = "none";
  element.querySelector(`[data-job="${EDIT}"]`).style.display = "none";
  element.querySelector(`[data-job="${COMPLETE}"]`).style.display = "none";

  element.querySelector(".text").contentEditable = true;
  element.querySelector(".text").focus();

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

  saveButtonActionTodo(element, saveBtn, deleteBtn, checkBtn);

  checkButtonActionTodo(element, taskList, id, saveBtn, deleteBtn, checkBtn);

  deleteButtonActionTodo(element, saveBtn, deleteBtn, checkBtn);
}
