import { EDIT, COMPLETE } from "/js/constants.js";
import calculateDuration from "/js/utility/calculateDuration.js";
import createDurationElement from "/js/utility/createDurationElement.js";
import toggleButtonDisplayByAttributes from "/js/utility/toggleButtonDisplayByAttributes.js";

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

  const attr = "data-job";
  toggleButtonDisplayByAttributes(
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
