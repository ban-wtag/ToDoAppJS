import { taskLIST } from "/js/addToTask.js";
import { UL_LIST, CLICK_EVENT, EDIT, COMPLETE, COMPLETED_TASK } from "/js/constants.js";

export default function completeToDo(element, taskList) {
  let index = taskList.findIndex((item) => {
    return item.id == element.id;
  });
  taskLIST[index].done = true;
  element.parentNode.classList.add(COMPLETED_TASK);
  element.parentNode.querySelector(".text").style.textDecoration =
    "line-through";
  element.parentNode.querySelector(".text").style.color = "green";
  element.style.display = "none";
  element.parentNode.querySelector(`[data-job="${EDIT}"]`).style.display =
    "none";
  const taskStartday = element.parentNode.querySelector(".date").innerText;
  let start = taskStartday.replace(/[^0-9]/g, "-");
  start = start.slice(12);
  const startdate = new Date(start).getTime();

  const enddate = new Date().getTime();
  let duration = parseInt((enddate - startdate) / 86400000);
  duration += 1;

  const el = document.createElement("div");
  el.classList.add("duration");
  el.textContent = `Completed in ${duration} days`;
  element.parentNode.appendChild(el);
}
