import { EDIT, COMPLETE, COMPLETED_TASK } from "/js/constants.js";
import calculateDuration from "/js/utility/mDDuration.js";
import createDurationElement from "/js/utility/mDDuElement.js";

export default function markTodoAsCompleted(element, taskList, id) {
  const index = taskList.findIndex((item) => item.id === id);
  if (index === -1) {
    return;
  }
  taskList[index].done = true;

  const text = element.querySelector(".text").style;
  text.textDecoration = "line-through";
  text.color = "green";

  element.querySelector(`[data-job="${COMPLETE}"]`).style.display = "none";
  element.querySelector(`[data-job="${EDIT}"]`).style.display = "none";
  element.classList.add(COMPLETED_TASK);

  const taskStartDay = element.querySelector(".date").innerText;
  let taskStartDateString = taskStartDay.replace(/[^0-9]/g, "-");
  taskStartDateString = taskStartDateString.slice(12);

  const startDate = new Date(taskStartDateString).getTime();
  const duration = calculateDuration(startDate);
  if (duration === -1) {
    return;
  }
  const taskCompleteDuration = createDurationElement(duration);
  element.appendChild(taskCompleteDuration);
}
