import {
  CLICK_EVENT,
  EDIT,
  COMPLETE,
  DELETE_TODO,
} from "/js/constants.js";
import completeToDo from "/js/markDone.js";

export default function editTask(element, taskList, id) {
  element.querySelector(`[data-job="${DELETE_TODO}"]`).style.display = "none";
  element.querySelector(`[data-job="${EDIT}"]`).style.display = "none";
  element.querySelector(`[data-job="${COMPLETE}"]`).style.display = "none";

  const previousContent = element.querySelector(".text").innerText;

  element.querySelector(".text").contentEditable = true;
  element.querySelector(".text").focus();
  let removeListener = false;
  const checkBtn = document.createElement("img");
  checkBtn.setAttribute("src", "icons/done.svg");
  checkBtn.setAttribute("data-job", "editCheck");
  checkBtn.setAttribute("id", `${id}`);
  element.appendChild(checkBtn);

  function checkButtonAction (event){
    event.stopPropagation();
    event.preventDefault();
    element.querySelector(".text").contentEditable = false;
    completeToDo(element, taskList, id); 
    element.querySelector(`[data-job="${DELETE_TODO}"]`).style.display = "inline-block";
    element.querySelector(`[data-job="${EDIT}"]`).style.display = "none";
    saveBtn.style.display = "none";
    checkBtn.style.display = "none";
    deleteBtn.style.display = "none";
    removeListener = true;
  }

  checkBtn.addEventListener(CLICK_EVENT, checkButtonAction);
  if(removeListener){
    checkBtn.removeEventListener(CLICK_EVENT, checkButtonAction);
  }

  const deleteBtn = document.createElement("img");
  deleteBtn.setAttribute("src", "icons/delete.svg");
  deleteBtn.setAttribute("data-job", "editDelete");
  deleteBtn.setAttribute("id", `${id}`);
  element.appendChild(deleteBtn);

  function deleteButtonAction (event) {
    event.stopPropagation();
    event.preventDefault();
    element.querySelector(".text").contentEditable = false;
    element.querySelector(".text").innerText = previousContent;
    element.querySelector(`[data-job="${EDIT}"]`).style.display = "inline-block"; 
    element.querySelector(`[data-job="${DELETE_TODO}"]`).style.display = "inline-block";
    element.querySelector(`[data-job="${COMPLETE}"]`).style.display = "inline-block";
    saveBtn.style.display = "none";
    checkBtn.style.display = "none";
    deleteBtn.style.display = "none";
    removeListener = true;
  }

  deleteBtn.addEventListener(CLICK_EVENT, deleteButtonAction);
  if(removeListener){
    deleteBtn.removeEventListener(CLICK_EVENT, deleteButtonAction);
  }

  const saveBtn = document.createElement("button");
  saveBtn.innerText = "Save";
  saveBtn.classList.add("saveBtn");
  element.appendChild(saveBtn);

  function saveButtonAction (event) {
    event.stopPropagation();
    event.preventDefault();
    element.querySelector(".text").contentEditable = false;
    deleteBtn.style.display = "none";
    element.querySelector(".saveBtn").style.display = "none";
    element.querySelector(`[data-job="${DELETE_TODO}"]`).style.display = "inline-block";
    element.querySelector(`[data-job="${COMPLETE}"]`).style.display = "inline-block";
    element.querySelector(`[data-job="${EDIT}"]`).style.display = "inline-block"; 
    saveBtn.style.display = "none";
    checkBtn.style.display = "none";
    removeListener = true;
  }

  saveBtn.addEventListener(CLICK_EVENT, saveButtonAction);
  if(removeListener){
    saveBtn.removeEventListener(CLICK_EVENT, saveButtonAction);
  }
}
