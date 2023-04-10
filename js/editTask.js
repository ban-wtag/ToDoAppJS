import {
  UL_LIST,
  CLICK_EVENT,
  EDIT,
  COMPLETE,
  DELETE_TODO,
} from "/js/constants.js";
import completeToDo from "/js/markDone.js";
import removeToDo from "/js/deleteTask.js";

export default function editTask(element, taskList) {
  element.style.display = "none";
  element.parentNode.querySelector(
    `[data-job="${DELETE_TODO}"]`
  ).style.display = "none";
  element.parentNode.querySelector(`[data-job="${EDIT}"]`).style.display =
    "none";
  element.parentNode.querySelector(`[data-job="${COMPLETE}"]`).style.display =
    "none";

  const previousContent = element.parentNode.querySelector(".text").innerText;

  element.parentNode.querySelector(".text").contentEditable = true;
  element.parentNode.querySelector(".text").focus();

  const checkBtn = document.createElement("img");
  checkBtn.setAttribute("src", "icons/done.svg");
  checkBtn.setAttribute("data-job", "editCheck");
  checkBtn.setAttribute("id", `${element.id}`);
  element.parentNode.appendChild(checkBtn);

  checkBtn.addEventListener(CLICK_EVENT, function (event5) {
    event5.stopPropagation();
    event5.preventDefault();
    element.parentNode.querySelector(".text").contentEditable = false;
    completeToDo(element, taskList);
    element.style.display = "inline-block";
    element.parentNode.querySelector(
      `[data-job="${DELETE_TODO}"]`
    ).style.display = "inline-block";
    element.parentNode.querySelector(`[data-job="${EDIT}"]`).style.display =
      "none";
    saveBtn.style.display = "none";
    checkBtn.style.display = "none";
    deleteBtn.style.display = "none";
    checkBtn.removeEventListener(CLICK_EVENT, event5);
  });

  const deleteBtn = document.createElement("img");
  deleteBtn.setAttribute("src", "icons/delete.svg");
  deleteBtn.setAttribute("data-job", "editDelete");
  deleteBtn.setAttribute("id", `${element.id}`);
  element.parentNode.appendChild(deleteBtn);

  deleteBtn.addEventListener(CLICK_EVENT, function (event4) {
    event4.stopPropagation();
    event4.preventDefault();
    element.parentNode.querySelector(".text").contentEditable = false;
    element.parentNode.querySelector(".text").innerText = previousContent;
    element.style.display = "inline-block";
    element.parentNode.querySelector("[data-job='delete']").style.display =
      "inline-block";
    element.parentNode.querySelector("[data-job='complete']").style.display =
      "inline-block";
    saveBtn.style.display = "none";
    checkBtn.style.display = "none";
    deleteBtn.style.display = "none";
    deleteBtn.removeEventListener(CLICK_EVENT, event4);
  });

  const saveBtn = document.createElement("button");
  saveBtn.innerText = "Save";
  saveBtn.classList.add("saveBtn");
  element.parentNode.appendChild(saveBtn);

  saveBtn.addEventListener(CLICK_EVENT, function (event2) {
    event2.stopPropagation();
    event2.preventDefault();
    element.parentNode.querySelector(".text").contentEditable = false;
    element.style.display = "inline-block";
    deleteBtn.style.display = "none";
    element.parentNode.querySelector(".saveBtn").style.display = "none";
    element.parentNode.querySelector("[data-job='delete']").style.display =
      "inline-block";
    element.parentNode.querySelector("[data-job='complete']").style.display =
      "inline-block";
    saveBtn.style.display = "none";
    checkBtn.style.display = "none";
    saveBtn.removeEventListener(CLICK_EVENT, event2);
  });
}
