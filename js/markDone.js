import { EDIT, COMPLETE, COMPLETED_TASK } from "/js/constants.js";
import calculateDuration from "/js/utility/calculateDuration.js";
import createDurationElement from "/js/utility/createDurationElement.js";
import hideButtonByAttributes from "/js/utility/hideButtonByAttributes.js";

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

  todoItemElement.querySelector(`[data-job="${COMPLETE}"]`).style.display =
    "none";
  todoItemElement.querySelector(`[data-job="${EDIT}"]`).style.display = "none";
  todoItemElement.classList.add(COMPLETED_TASK);
  const textStyle = todoItemElement.querySelector(".text").style;
  textStyle.textDecoration = "line-through";
  textStyle.color = "green";

  const attr = "data-job";
  hideButtonByAttributes(
    todoItemElement,
    `[${attr}="${COMPLETE}"]`,
    `[${attr}="${EDIT}"]`
  );
  const taskStartDate = task.startDate;
  const duration = calculateDuration(taskStartDate);
  if (duration === -1) {
    return;
  }

  const taskCompleteDuration = createDurationElement(duration);
  todoItemElement.appendChild(taskCompleteDuration);
}
