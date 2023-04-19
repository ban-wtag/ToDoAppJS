import { EDIT, COMPLETE } from "/js/constants.js";
import calculateDuration from "/js/utility/calculateDuration.js";
import createDurationElement from "/js/utility/createDurationElement.js";

export default function markTodoAsCompleted(
  todoItemElement,
  taskList,
  elementId
) {
  const task = taskList.find((item) => item.id === elementId);
  if (!task) {
    return;
  }

  task.done = true;

  const textStyle = todoItemElement.querySelector(".text").style;
  textStyle.textDecoration = "line-through";
  textStyle.color = "green";

  todoItemElement.querySelector(`[data-job="${COMPLETE}"]`).style.display = "none";
  todoItemElement.querySelector(`[data-job="${EDIT}"]`).style.display = "none";

  const taskStartDay = todoItemElement.querySelector(".date").innerText;
  let taskStartDateString = taskStartDay.replace(/[^0-9]/g, "-");
  taskStartDateString = taskStartDateString.slice(12);

  const duration = calculateDuration(taskStartDateString);
  if (duration === -1) {
    return;
  }

  const taskCompleteDuration = createDurationElement(duration);
  todoItemElement.appendChild(taskCompleteDuration);
}
