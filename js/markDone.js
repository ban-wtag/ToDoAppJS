import { EDIT, COMPLETE } from "/js/constants.js";
import calculateDuration from "/js/utility/mDDuration.js";
import createDurationElement from "/js/utility/mDDuElement.js";

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
