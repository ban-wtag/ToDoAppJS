import { EDIT, COMPLETE } from "/js/constants.js";

function calculateDuration(startdate) {
  const enddate = new Date().getTime();
  let duration = parseInt((enddate - startdate) / 86400000);
  duration += 1;
  return duration;
}

function createDurationElement(duration, element) {
  const el = document.createElement("div");
  el.classList.add("duration");
  el.textContent = `Completed in ${duration} days`;
  element.appendChild(el);
}

export default function markTodoAsCompleted(element, taskList, id) {
  const index = taskList.findIndex((item) => item.id === id);
  taskList[index].done = true;

  element.querySelector(".text").style.textDecoration = "line-through";
  element.querySelector(".text").style.color = "green";
  element.querySelector(`[data-job="${COMPLETE}"]`).style.display = "none";
  element.querySelector(`[data-job="${EDIT}"]`).style.display = "none";

  const taskStartday = element.querySelector(".date").innerText;
  let start = taskStartday.replace(/[^0-9]/g, "-");
  start = start.slice(12);
  const startdate = new Date(start).getTime();

  const duration = calculateDuration(startdate);
  createDurationElement(duration, element);
}
