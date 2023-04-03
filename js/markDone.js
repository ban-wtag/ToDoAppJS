import { LIST } from "./addToTask.js"; //named import
import { list } from "./constants.js"; //named import

function completeToDo(element) {
  element.parentNode.querySelector(".text").style.textDecoration =
    "line-through";
  element.parentNode.querySelector(".text").style.color = "green";
  element.style.display = "none";
  element.parentNode.querySelector("[job='edit']").style.display = "none";
  const taskStartday = element.parentNode.querySelector(".date").innerText;
  console.log(taskStartday);
  var start = taskStartday.replace(/[^0-9]/g, "-");
  start = start.slice(12);
  console.log("start ", start);
  var startdate = new Date(start);

  const enddate = new Date();
  let duration = parseInt((enddate - startdate) / 86400000);
  if (duration == 0) {
    duration += 1;
  }

  const el = document.createElement("div");
  el.classList.add("duration");
  el.textContent = `Completed in ${duration} days`;
  element.parentNode.appendChild(el);
  LIST[element.id].done = true;
}

list.addEventListener("click", function (event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  if (elementJob == "complete") {
    completeToDo(element);
  }
  //add item to localstorage
  localStorage.setItem("TODO", JSON.stringify(LIST));
});
