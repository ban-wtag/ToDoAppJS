import { LIST } from "/js/addToTask.js";
import { list, CLICK_EVENT, EDIT, COMPLETE } from "/js/constants.js";

export default function completeToDo(element) {
  console.log("complete to do function a aschi");

  let ind = LIST.findIndex((item) => {
    return item.id == element.id;
  });
  console.log("index", ind);
  LIST[ind].done = true;

  element.parentNode.querySelector(".text").style.textDecoration =
    "line-through";
  element.parentNode.querySelector(".text").style.color = "green";
  element.style.display = "none";
  element.parentNode.querySelector(`[job="${EDIT}"]`).style.display = "none";
  const taskStartday = element.parentNode.querySelector(".date").innerText;
  let start = taskStartday.replace(/[^0-9]/g, "-");
  start = start.slice(12);
  const startdate = new Date(start);

  const enddate = new Date();
  let duration = parseInt((enddate - startdate) / 86400000);
  if (duration == 0) {
    duration += 1;
  }

  const el = document.createElement("div");
  el.classList.add("duration");
  el.textContent = `Completed in ${duration} days`;
  element.parentNode.appendChild(el);
}
