import { LIST } from "/js/addToTask.js";
import { list, CLICK_EVENT, EDIT, COMPLETE } from "/js/constants.js";
import completeToDo from "/js/markDone.js";
import removeToDos from "/js/deleteTask.js";

export default function editTask(element) {
  element.style.display = "none";
  element.parentNode.querySelector("[job='delete']").style.display = "none";
  element.parentNode.querySelector("[job='edit']").style.display = "none";
  element.parentNode.querySelector("[job='complete']").style.display = "none";

  console.log("parent", element.parentNode.querySelector(".text"));
  const previousContent = element.parentNode.querySelector(".text").innerText;

  element.parentNode.querySelector(".text").contentEditable = true;
  element.parentNode.querySelector(".text").focus();

  const checkBtn = document.createElement("img");
  checkBtn.setAttribute("src", "icons/done.svg");
  checkBtn.setAttribute("job", "editCheck");
  checkBtn.setAttribute("id", `${element.id}`);
  element.parentNode.appendChild(checkBtn);

  checkBtn.addEventListener("click", function (event5) {
    event5.stopPropagation();
    event5.preventDefault();
    element.parentNode.querySelector(".text").contentEditable = false;
    completeToDo(element);
    element.style.display = "inline-block";
    element.parentNode.querySelector("[job='delete']").style.display =
      "inline-block";
    element.parentNode.querySelector("[job='edit']").style.display = "none";
    saveBtn.style.display = "none";
    checkBtn.style.display = "none";
    deleteBtn.style.display = "none";
  });

  const deleteBtn = document.createElement("img");
  deleteBtn.setAttribute("src", "icons/delete.svg");
  deleteBtn.setAttribute("job", "editDelete");
  deleteBtn.setAttribute("id", `${element.id}`);
  element.parentNode.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function (event4) {
    event4.stopPropagation();
    event4.preventDefault();
    element.parentNode.querySelector(".text").contentEditable = false;
    element.parentNode.querySelector(".text").innerText = previousContent;
    element.style.display = "inline-block";
    element.parentNode.querySelector("[job='delete']").style.display =
      "inline-block";
    element.parentNode.querySelector("[job='complete']").style.display =
      "inline-block";
    saveBtn.style.display = "none";
    checkBtn.style.display = "none";
    deleteBtn.style.display = "none";
  });

  const saveBtn = document.createElement("button");
  saveBtn.innerText = "Save";
  saveBtn.classList.add("saveBtn");
  element.parentNode.appendChild(saveBtn);

  saveBtn.addEventListener("click", function (event2) {
    event2.stopPropagation();
    event2.preventDefault();
    element.parentNode.querySelector(".text").contentEditable = false;
    element.style.display = "inline-block";
    deleteBtn.style.display = "none";
    element.parentNode.querySelector(".saveBtn").style.display = "none";
    element.parentNode.querySelector("[job='delete']").style.display =
      "inline-block";
    element.parentNode.querySelector("[job='complete']").style.display =
      "inline-block";
    saveBtn.style.display = "none";
    checkBtn.style.display = "none";
  });
}
